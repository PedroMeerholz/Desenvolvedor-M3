import { createProductElement, createProductListRowElement } from "./productElementBuilder.js";

export default async function buildCatalog(filters = { 'size': [], 'color': [], 'price': [] }) {
    const query = await fetch('http://localhost:5000/products', {
        method: 'GET'
    });
    const products = await query.json();

    let productListElement = document.getElementById('product-list');
    clearProductList(productListElement);

    let filteredProducts;
    if (filters['size'].length > 0) {
        filteredProducts = filterBySize(filters['size'], products);
        if (filters['color'].length > 0) {
            filteredProducts = filterByColor(filters['color'], filteredProducts);
        }
        if (filters['price'].length > 0) {
            filteredProducts = filterByPrice(filters['price'], filteredProducts);
        }
        appendCatalogRows(productListElement, filteredProducts);
    } else if (filters['color'].length > 0) {
        filteredProducts = filterByColor(filters['color'], products);
        if (filters['size'].length > 0) {
            filteredProducts = filterBySize(filters['size'], filteredProducts);
        }
        if (filters['price'].length > 0) {
            filteredProducts = filterByPrice(filters['price'], filteredProducts);
        }
        appendCatalogRows(productListElement, filteredProducts);
    } else if (filters['price'].length > 0) {
        filteredProducts = filterByPrice(filters['price'], products);
        if (filters['size'].length > 0) {
            filteredProducts = filterBySize(filters['size'], filteredProducts);
        }
        if (filters['color'].length > 0) {
            filteredProducts = filterByColor(filters['color'], filteredProducts);
        }
        appendCatalogRows(productListElement, filteredProducts);
    } else {
        appendCatalogRows(productListElement, products);
    }
}

function clearProductList(productListElement) {
    if (productListElement.children.length > 0) {
        while (productListElement.firstChild) {
            productListElement.removeChild(productListElement.lastChild);
        }
    }
}

function filterBySize(filters, products) {
    let filteredProducts = [];
    filters.forEach(size => {
        products.forEach(product => {
            if (product.size.includes(size)) {
                if (!filteredProducts.includes(product)) {
                    filteredProducts.push(product);
                }
            }
        });
    });
    return filteredProducts;
}

function filterByColor(filters, products) {
    let filteredProducts = [];
    filters.forEach(color => {
        products.forEach(product => {
            if (product.color.includes(color)) {
                if (!filteredProducts.includes(product)) {
                    filteredProducts.push(product);
                }
            }
        });
    });
    return filteredProducts;
}

function filterByPrice(filters, products) {
    let filteredProducts = [];
    filters.forEach(prices => {
        products.forEach(product => {
            const intPrices = String(prices).split("-");
            if (product.price >= parseInt(intPrices[0]) && product.price <= parseInt(intPrices[1])) {
                if (!filteredProducts.includes(product)) {
                    filteredProducts.push(product);
                }
            }
        });
    });
    return filteredProducts;
}

function appendCatalogRows(productListElement, products) {
    const catalogRows = buildCatalogRows(products);
    catalogRows.forEach(row => {
        productListElement.appendChild(row);
    });
}

export function buildCatalogRows(products) {
    let productListRows = [];
    let productListRow = createProductListRowElement();
    if (products.length < 3) {
        let productListRow = buildRow(products);
        productListRows.push(productListRow);
    } else {
        for (let i = 0; i < products.length; i += 3) {
            productListRow = buildRow(products.slice(i, i + 3));
            productListRows.push(productListRow);
        }
    }
    return productListRows;
}

function buildRow(products) {
    let productListRow = createProductListRowElement();
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productElement = createProductElement(product.image, product.name, product.price, product.parcelamento);
        productListRow.appendChild(productElement);
    }
    return productListRow;
}
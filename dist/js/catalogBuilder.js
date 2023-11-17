import { createProductElement } from "./productElementBuilder.js";

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
        appendProductsOnList(productListElement, filteredProducts);
    } else if (filters['color'].length > 0) {
        filteredProducts = filterByColor(filters['color'], products);
        if (filters['size'].length > 0) {
            filteredProducts = filterBySize(filters['size'], filteredProducts);
        }
        if (filters['price'].length > 0) {
            filteredProducts = filterByPrice(filters['price'], filteredProducts);
        }
        appendProductsOnList(productListElement, filteredProducts);
    } else if (filters['price'].length > 0) {
        filteredProducts = filterByPrice(filters['price'], products);
        if (filters['size'].length > 0) {
            filteredProducts = filterBySize(filters['size'], filteredProducts);
        }
        if (filters['color'].length > 0) {
            filteredProducts = filterByColor(filters['color'], filteredProducts);
        }
        appendProductsOnList(productListElement, filteredProducts);
    } else {
        appendProductsOnList(productListElement, products);
    }
}

export function buildSortedCatalog(products) {
    let productListElement = document.getElementById('product-list');
    clearProductList(productListElement);
    appendProductsOnList(productListElement, products);
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

function appendProductsOnList(productListElement, products) {
    let productElement;
    products.forEach(product => {
        productElement = createProductElement(product.image, product.name, product.price, product.date, product.parcelamento);
        productListElement.appendChild(productElement);
    });
}
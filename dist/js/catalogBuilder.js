import { createProductElement, createProductListRowElement } from "./productElementBuilder.js";


export default async function buildCatalog(sizeFilter = []) {
    console.log(sizeFilter);

    const query = await fetch('http://localhost:5000/products', {
        method: 'GET'
    });
    const products = await query.json();

    let productListElement = document.getElementById('product-list');
    if (productListElement.children.length > 0) {
        while (productListElement.firstChild) {
            productListElement.removeChild(productListElement.lastChild);
        }
    }

    if (sizeFilter.length > 0) {
        let filteredProducts = [];
        sizeFilter.forEach(size => {
            products.forEach(product => {
                if (product.size.includes(size)) {
                    if (!filteredProducts.includes(product)) {
                        filteredProducts.push(product);
                    }
                }
            });
        });
        appendCatalogRows(productListElement, filteredProducts);
    } else {
        appendCatalogRows(productListElement, products);
    }
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
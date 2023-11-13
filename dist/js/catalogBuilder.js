import createProductElement, { createProductListRowElement } from "./productElementBuilder.js";

export function buildCatalogRows(products) {
    let productListRows = [];
    let rowItem = 1;
    let productListRow = createProductListRowElement();
    for (let i = 1; i < products.length + 1; i++) {
        console.log(i);
        let product = products[i - 1];
        console.log(product.name);
        let productElement = createProductElement(product.image, product.name, product.price, product.parcelamento);
        productListRow.appendChild(productElement);
        if (rowItem === 3) {
            rowItem = 1;
            console.log(productListRow);
            productListRows.push(productListRow);
            productListRow = createProductListRowElement();
        } else {
            rowItem++;
        }
    }
    return productListRows;
}
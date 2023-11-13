import { buildCatalogRows } from "./catalogBuilder.js";

const products = await fetch('http://localhost:5000/products', {
    method: 'GET'
})

let productListElement = document.getElementById('product-list');
const catalogRows = buildCatalogRows(await products.json());
catalogRows.forEach(row => {
    productListElement.appendChild(row);
});
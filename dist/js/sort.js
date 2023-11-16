import { buildSortedCatalog } from "./catalogBuilder.js";

const selectElement = document.getElementById('sort-products');
selectElement.addEventListener("change", () => {
    const sortBy = selectElement.options[selectElement.selectedIndex].text;
    const productElementList = document.getElementById('product-list');
    const products = extractProductsInfo(productElementList);

    let sortedProducts;
    if (sortBy === 'Maior preço') {
        sortedProducts = products.sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price);
    } else if (sortBy === 'Menor preço') {
        sortedProducts = products.sort((firstProduct, secondProduct) => { firstProduct.price - secondProduct.price });
    } else {
        sortedProducts = products.sort((firstProduct, secondProduct) => { new Date(firstProduct.date) - new Date(secondProduct.date) });
        sortedProducts = sortedProducts.reverse();
    }
    buildSortedCatalog(sortedProducts);
});

function extractProductsInfo(productElementList) {
    const productRows = Array.from(productElementList.children);
    let productDivs = [];
    let products = [];
    productRows.forEach(row => {
        productDivs = Array.from(row.children);
        productDivs.forEach(productDiv => {
            const productDivContent = Array.from(productDiv.children);
            const productFigure = productDivContent[0];
            const productInfoContainer = productDivContent[1];
            let product = {
                name: productDivContent[0].textContent,
                image: productFigure.firstChild.src,
                price: parseFloat(productInfoContainer.firstChild.textContent.substring(2)),
                parcelamento: [productInfoContainer.lastChild.textContent.substring(4, 5), productInfoContainer.lastChild.textContent.substring(12)],
                date: productDivContent[2].id
            }
            products.push(product)
        });
    });
    return products;
}

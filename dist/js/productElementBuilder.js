export function createProductElement(image, name, price, date, parcelamento) {
    let productElement = document.createElement("div");
    productElement.classList = ["product"];
    let productFigure = createProductFigureElement(image, name);
    let priceInfoContainer = createPriceInfoContainer(`R\$${price}`, `até ${parcelamento[0]}x de R\$${parcelamento[1]}`);
    let dateSpan = createDateSpan(date);
    let buyButton = createBuyButtonElement();
    productElement.appendChild(productFigure);
    productElement.appendChild(priceInfoContainer);
    productElement.appendChild(dateSpan);
    productElement.appendChild(buyButton);
    return productElement;
}

function createProductFigureElement(imgPath, productName) {
    let productFigureElement = document.createElement("figure");
    let productImageElement = createProductImageElement(imgPath);
    let productNameElement = createProductNameElement(productName);
    productFigureElement.appendChild(productImageElement);
    productFigureElement.appendChild(productNameElement);
    return productFigureElement;
}

function createProductImageElement(imgPath) {
    let productImageElement = document.createElement("img");
    productImageElement.src = imgPath;
    return productImageElement;
}

function createProductNameElement(productName) {
    let productNameElement = document.createElement("figcaption");
    productNameElement.textContent = productName;
    productNameElement.classList = ["product-text-align", "product-title"];
    productNameElement.style.fontSize = 10;
    productNameElement.style.marginTop = '10px';
    productNameElement.style.textAlign = 'center';
    return productNameElement;
}

function createPriceInfoContainer(price, paymentInfo) {
    let priceInfoContainer = document.createElement("div");
    priceInfoContainer.className = "price-info-container";
    let productPriceElement = createProductPriceElement(price);
    let productPaymentInfo = createProductPaymentInfoElement(paymentInfo);
    priceInfoContainer.appendChild(productPriceElement);
    priceInfoContainer.appendChild(productPaymentInfo);
    return priceInfoContainer;
}

function createProductPriceElement(price) {
    let productPriceElement = document.createElement("p");
    productPriceElement.textContent = price;
    productPriceElement.style.fontSize = 10;
    productPriceElement.style.textAlign = 'center';
    productPriceElement.style.fontWeight = 700
    return productPriceElement;
}

function createProductPaymentInfoElement(paymentInfo) {
    let productPaymentInfoElement = document.createElement("p");
    productPaymentInfoElement.textContent = paymentInfo;
    productPaymentInfoElement.style.color = '#666666';
    productPaymentInfoElement.style.fontSize = 16;
    productPaymentInfoElement.style.textAlign = 'center';
    return productPaymentInfoElement;
}

function createDateSpan(date) {
    let dateSpan = document.createElement('span');
    dateSpan.id = date;
    return dateSpan;
}

function createBuyButtonElement() {
    let buyButton = document.createElement("input");
    buyButton.className = "buy-button";
    buyButton.type = "button";
    buyButton.value = "COMPRAR";
    return buyButton;
}
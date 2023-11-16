import buildCatalog from "./catalogBuilder.js";

let sizeFilters = document.getElementsByClassName('size-filter-option');
sizeFilters = Array.from(sizeFilters);

let colorFilters = document.getElementsByClassName('color-filter-option');
colorFilters = Array.from(colorFilters);

let priceFilters = document.getElementsByClassName('price-filter-option');
priceFilters = Array.from(priceFilters);

let requiredFilters = {
    'size': [],
    'color': [],
    'price': []
};

sizeFilters.forEach(filter => {
    filter.addEventListener("click", (event) => {
        const input = filter.firstElementChild;
        const inputValue = input.value;
        if (event.target.localName === 'input') {
            if (!requiredFilters['size'].includes(inputValue)) {
                requiredFilters['size'].push(inputValue);
            } else {
                const index = requiredFilters['size'].indexOf(inputValue);
                requiredFilters['size'].splice(index, 1);
            }
            buildCatalog(requiredFilters);
        }
    });
});

colorFilters.forEach(filter => {
    filter.addEventListener("click", (event) => {
        const input = filter.firstElementChild;
        const inputValue = input.value;
        if (event.target.localName === 'input') {
            if (!requiredFilters['color'].includes(inputValue)) {
                requiredFilters['color'].push(inputValue);
            } else {
                const index = requiredFilters['color'].indexOf(inputValue);
                requiredFilters['color'].splice(index, 1);
            }
            buildCatalog(requiredFilters);
        }
    });
});

priceFilters.forEach(filter => {
    filter.addEventListener("click", (event) => {
        const input = filter.firstElementChild;
        const inputValue = input.value;
        console.log(inputValue);
        if (event.target.localName === 'input') {
            if (!requiredFilters['price'].includes(inputValue)) {
                requiredFilters['price'].push(inputValue);
            } else {
                const index = requiredFilters['price'].indexOf(inputValue);
                requiredFilters['price'].splice(index, 1);
            }
            buildCatalog(requiredFilters);
        }
    });
});
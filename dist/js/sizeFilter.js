import buildCatalog from "./catalogBuilder.js";

let sizeFilters = document.getElementsByClassName('size-filter-option');
sizeFilters = Array.from(sizeFilters);

let requiredFilters = [];

sizeFilters.forEach(filter => {
    filter.addEventListener("click", (event) => {
        const input = filter.firstElementChild;
        const inputValue = input.value;
        if (event.target.localName === 'input') {
            if (!requiredFilters.includes(inputValue)) {
                requiredFilters.push(inputValue);
            } else {
                const index = requiredFilters.indexOf(inputValue);
                requiredFilters.splice(index, 1);
            }
            buildCatalog(requiredFilters);
        }
    });
});
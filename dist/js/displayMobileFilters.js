let mobileFilterButton = document.getElementById('mobile-filter-button');
mobileFilterButton.addEventListener("click", () => {
    let mobileFilterOptionsDiv = document.getElementById('mobile-filter-options');
    mobileFilterOptionsDiv.style.display = 'initial';
    let mobileFilters = document.getElementById('mobile-filters');
    mobileFilters.style.display = 'initial';
    let headerContent = document.getElementById('header-content');
    headerContent.style.display = 'none';
    let sectionHeader = document.getElementById('section-header');
    sectionHeader.style.display = 'none';
    let productList = document.getElementById('product-list');
    productList.style.display = 'none';
    let loadMoreButtonDiv = document.getElementById('load-more-button-div');
    loadMoreButtonDiv.style.display = 'none';
    let footer = document.getElementById('footer');
    footer.style.display = 'none';
});

let closeMobileFilterOptionsButton = document.getElementById('close-mobile-filter-options-button');
closeMobileFilterOptionsButton.addEventListener("click", () => {
    let mobileFilterOptionsDiv = document.getElementById('mobile-filter-options');
    mobileFilterOptionsDiv.style.display = 'none';
    let headerContent = document.getElementById('header-content');
    headerContent.style.display = 'flex';
    let sectionHeader = document.getElementById('section-header');
    sectionHeader.style.display = 'initial';
    let productList = document.getElementById('product-list');
    productList.style.display = 'flex';
    let loadMoreButtonDiv = document.getElementById('load-more-button-div');
    loadMoreButtonDiv.style.display = 'initial';
    let footer = document.getElementById('footer');
    footer.style.display = 'flex';
});
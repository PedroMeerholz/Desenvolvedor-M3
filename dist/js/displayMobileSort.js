let mobileSortButton = document.getElementById('mobile-sort-button');
mobileSortButton.addEventListener("click", () => {
    let mobileSortPage = document.getElementById('mobile-sort-page');
    mobileSortPage.style.display = 'initial';
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

let closeMobileSortPageButton = document.getElementById('close-mobile-sort-page-button');
closeMobileSortPageButton.addEventListener("click", () => {
    let mobileSortPage = document.getElementById('mobile-sort-page');
    mobileSortPage.style.display = 'none';
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
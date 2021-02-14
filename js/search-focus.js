var searchForm = document.querySelector('.search-form');
var searchButton = document.querySelector('.search-form__button');
var searchInput = document.querySelector('.search-form__input');

searchInput.addEventListener('click', function(evt) {
    evt.preventDefault();
        if (!searchForm.classList.contains('page-header__form_search-focus') && !searchButton.classList.contains('search-form__button_focus')) {
            searchForm.classList.add('page-header__form_search-focus');
            searchButton.classList.add('search-form__button_focus');
        }
});


window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (searchForm.classList.contains('page-header__form_search-focus') && searchButton.classList.contains('search-form__button_focus')) {
    evt.preventDefault();

            searchForm.classList.remove('page-header__form_search-focus');
            searchButton.classList.remove('search-form__button_focus');
        }
    }
});

searchForm.addEventListener('submit', function(evt) {
    
    if (searchForm.classList.contains('page-header__form_search-focus') && searchButton.classList.contains('search-form__button_focus')) {
                searchForm.classList.remove('page-header__form_search-focus');
                searchButton.classList.remove('search-form__button_focus');
            }
})
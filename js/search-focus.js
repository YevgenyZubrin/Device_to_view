var searchForm = document.querySelector('.search-form');
var searchButton = document.querySelector('.search-form__button');
var searchInput = document.querySelector('.search-form__input');

searchInput.addEventListener('focus', function(evt) {
    evt.preventDefault();
        if (!searchForm.classList.contains('page-header__form_search-focus') && searchButton.classList.contains('visually-hidden')) {
            searchForm.classList.add('page-header__form_search-focus');
            searchButton.classList.remove('visually-hidden');
        }
});

searchInput.addEventListener('blur', function(evt) {
    evt.preventDefault();
        if (searchForm.classList.contains('page-header__form_search-focus')) { 
            searchForm.classList.remove('page-header__form_search-focus');
        }

        if (!searchButton.classList.contains('visually-hidden')) {
            searchButton.classList.add('visually-hidden');
        }
});

// window.addEventListener('keydown', function(evt) {
//     if (evt.keyCode === 27) {
//         if (searchForm.classList.contains('page-header__form_search-focus') && !searchButton.classList.contains('visually-hidden')) {
//     evt.preventDefault();

//             searchForm.classList.remove('page-header__form_search-focus');
//             searchButton.classList.add('visually-hidden');
//         }
//     }
// });

searchForm.addEventListener('submit', function(evt) {
    
    if (searchForm.classList.contains('page-header__form_search-focus') && !searchButton.classList.contains('visually-hidden')) {
                searchForm.classList.remove('page-header__form_search-focus');
                searchButton.classList.add('visually-hidden');
            }
})
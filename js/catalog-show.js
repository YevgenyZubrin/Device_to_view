var catalogButton = document.querySelector('.page-header__button');
var catalog = document.querySelector('.catalog-modal');

catalogButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    catalog.classList.toggle('catalog-show');
})
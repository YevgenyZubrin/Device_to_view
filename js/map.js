var mapOpenButton = document.querySelector('.page-information__image');
var mapCloseButton = document.querySelector('.modal-map__close')
var mapOpen = document.querySelector('.modal-map');
var overlay = document.querySelector('.overlay')

mapOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    overlay.classList.add('overlay-show')
    mapOpen.classList.add('modal-show');
})

mapCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    overlay.classList.remove('overlay-show')
    mapOpen.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (mapOpen.classList.contains('modal-show')) {
            overlay.classList.remove('overlay-show');
            mapOpen.classList.remove('modal-show');
        }
    }
})

overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    overlay.classList.remove('overlay-show')
    mapOpen.classList.remove('modal-show');
})
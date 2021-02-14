var feedbackOpenButton = document.querySelector('.page-information__wright-button');
var feedbackCloseButton = document.querySelector('.modal-feedback__close');
var feedbackOpen = document.querySelector('.modal-feedback');
var overlay = document.querySelector('.overlay');

feedbackOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    overlay.classList.add('overlay-show')
    feedbackOpen.classList.add('modal-show');
})

feedbackCloseButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    overlay.classList.remove('overlay-show')
    feedbackOpen.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();

        if (feedbackOpen.classList.contains('modal-show')) {
            overlay.classList.remove('overlay-show');
            feedbackOpen.classList.remove('modal-show');
        }
    }
})

overlay.addEventListener('click', function(evt) {
    evt.preventDefault();
    
    overlay.classList.remove('overlay-show')
    feedbackOpen.classList.remove('modal-show');
})
var sliderOneButton = document.querySelector('.page-sliders__button_slider-1');
var sliderTwoButton = document.querySelector('.page-sliders__button_slider-2');
var sliderThreeButton = document.querySelector('.page-sliders__button_slider-3');

var sliderOne = document.querySelector('.slider-1');
var sliderTwo = document.querySelector('.slider-2');
var sliderThree = document.querySelector('.slider-3');

sliderOneButton.addEventListener('click', function(evt) {
    if (!sliderOne.classList.contains('page-sliders__slider_current')) 
    {
        sliderOne.classList.add('page-sliders__slider_current')
        sliderTwo.classList.remove('page-sliders__slider_current')
        sliderThree.classList.remove('page-sliders__slider_current')
    }

    if (!sliderOneButton.classList.contains('page-sliders__button_current')) 
    {
        sliderOneButton.classList.add('page-sliders__button_current')
        sliderTwoButton.classList.remove('page-sliders__button_current')
        sliderThreeButton.classList.remove('page-sliders__button_current')
    }
})

sliderTwoButton.addEventListener('click', function(evt) {
    if (!sliderTwo.classList.contains('page-sliders__slider_current')) 
    {
        sliderTwo.classList.add('page-sliders__slider_current')
        sliderOne.classList.remove('page-sliders__slider_current')
        sliderThree.classList.remove('page-sliders__slider_current')
    }

    if (!sliderTwoButton.classList.contains('page-sliders__button_current')) 
    {
        sliderTwoButton.classList.add('page-sliders__button_current')
        sliderOneButton.classList.remove('page-sliders__button_current')
        sliderThreeButton.classList.remove('page-sliders__button_current')
    }
})

sliderThreeButton.addEventListener('click', function(evt) {
    if (!sliderThree.classList.contains('page-sliders__slider_current')) 
    {
        sliderThree.classList.add('page-sliders__slider_current')
        sliderTwo.classList.remove('page-sliders__slider_current')
        sliderOne.classList.remove('page-sliders__slider_current')
    }

    if (!sliderThreeButton.classList.contains('page-sliders__button_current')) 
    {
        sliderThreeButton.classList.add('page-sliders__button_current')
        sliderTwoButton.classList.remove('page-sliders__button_current')
        sliderOneButton.classList.remove('page-sliders__button_current')
    }
})
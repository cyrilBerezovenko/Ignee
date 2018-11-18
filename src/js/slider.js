var slide = document.querySelector('#slide');

var sliderItem = slide.querySelector('.slider-item');
var sliderWrapperContent = slide.querySelector('.slider__wrapper-content');

var wrapperWidth = slide.querySelector('.slider__wrapper').clientWidth;
var sliderItemMargin = parseInt(getComputedStyle(sliderItem).marginRight);

var startStep = Math.floor(wrapperWidth / (sliderItem.clientWidth + sliderItemMargin));
var lastStep = slide.getElementsByClassName('slider-item').length;
const stepSize = sliderItem.clientWidth + sliderItemMargin;
var currentStep = startStep;

var leftButton = slide.querySelector('#left-arrow');
var rightButton = slide.querySelector('#right-arrow');

rightButton.onclick = moveLeft;
leftButton.onclick = moveRight;

function moveLeft() {
    if(currentStep === lastStep)
        return;
    currentStep++;
    var left = parseInt(getComputedStyle(sliderWrapperContent).left);
    left -= stepSize;
    sliderWrapperContent.style.left = left + 'px';
}

function moveRight() {
    if(currentStep === startStep)
        return;
    currentStep--;
    var left = parseInt(getComputedStyle(sliderWrapperContent).left);
    left += stepSize;
    sliderWrapperContent.style.left = left + 'px';
}

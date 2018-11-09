var sliderItem = document.querySelector('.slider-item');
var sliderWrapperContent = document.querySelector('.slider__wrapper-content');

var wrapperWidth = document.querySelector('.slider__wrapper').clientWidth;
var sliderItemMargin = parseInt(getComputedStyle(sliderItem).marginRight);

var startStep = Math.floor(wrapperWidth / (sliderItem.clientWidth + sliderItemMargin));
var lastStep = document.getElementsByClassName('slider-item').length;
var stepSize = sliderItem.clientWidth + sliderItemMargin;
var currentStep = startStep;

var leftButton = document.querySelector('#left-arrow');
var rightButton = document.querySelector('#right-arrow');

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

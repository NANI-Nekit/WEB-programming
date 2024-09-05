document.addEventListener('DOMContentLoaded', function() {
let mainDivLength; 
let offset = 0;
const sliderLine = document.querySelector('.firstFrame-DivForImg');

document.querySelector('.SliderBtn-Next').addEventListener('click', function(){
    mainDivLength = document.querySelector('.mainDiv').clientWidth;
    offset = offset + mainDivLength;
    if (offset > mainDivLength*2) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.SliderBtn-Prev').addEventListener('click', function () {
    mainDivLength = document.querySelector('.mainDiv').clientWidth;
    offset = offset - mainDivLength;
    if (offset < 0) {
        offset = mainDivLength*2;
    }
    sliderLine.style.left = -offset + 'px';
});

})
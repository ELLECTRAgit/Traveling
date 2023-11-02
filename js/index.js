// Слайдер
// видимая часть слайдера
let viewport = document.getElementById('viewport').offsetWidth;
console.log (viewport);
let container = document.querySelectorAll('.container');
// кнопка вперед и назад
// let btnNext = document.getElementById('slider__control-next');
// let btnPrev = document.getElementById('slider__control-prev');

let btnNext = document.querySelectorAll('.slider__control-next');
let btnPrev = document.querySelectorAll('.slider__control-prev');

let galleryOne = 0;
let galleryTwo = 1;
let galleryThree = 2;
let galleryFour = 3;


console.log (btnNext);
console.log (btnPrev);
// сам слайдер со слайдами, в котором картинки
let slider = document.querySelectorAll('div.slider');
console.log ('slider' + slider);
console.log (slider[0].style.left);
// получаем элементы для показа слайда
// let viewSlides = document.querySelectorAll('.pageination__item');
let viewSlidesOne = document.getElementById('viewSliderOne');
let viewSlidesTwo = document.getElementById('viewSliderTwo');
let viewSlidesThree = document.getElementById('viewSliderThree');
let viewSlidesFour = document.getElementById('viewSliderFour');



console.log ('по айди');
console.log (viewSlidesOne);
console.log (viewSlidesOne.children.length);
//объявляем переменную для номера слайда и инициализации (запуска)
let viewSlide = 0;

let viewSlider = 0;  
console.log (viewSlidesOne[0]);
// обработка клика на кнопку Вперед первой галереи
btnNext[galleryOne].addEventListener('click', function() {
    console.log('Hello');
    console.log(viewSlidesOne.children[viewSlide]);
    //делаем индикатор сайта красным
 
    viewSlidesOne.children[viewSlide].style.backgroundColor = 'white'; 
    
           if (viewSlide<(viewSlidesOne.children.length-1)) {
        viewSlide++;
        console.log('1');
    } else {viewSlide = 0;
    }
    //меняем цвет индикатора
    viewSlidesOne.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    // меняем позицию всего слайда
    
    slider[galleryOne].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Назад первой галереи
btnPrev[galleryOne].addEventListener('click', function() {
    viewSlidesOne.children[viewSlide].style.backgroundColor = 'white'; 
    if (viewSlide>0) {
        viewSlide--;
    } else {viewSlide=(viewSlidesOne.children.length-1);
    }
    viewSlidesOne.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    slider[galleryOne].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Вперед для второй галереи
btnNext[galleryTwo].addEventListener('click', function() {
    console.log('Hello');
    console.log(viewSlidesTwo.children[viewSlide]);
    //делаем индикатор сайта красным
 
    viewSlidesTwo.children[viewSlide].style.backgroundColor = 'white'; 
    
           if (viewSlide<(viewSlidesTwo.children.length-1)) {
        viewSlide++;
        console.log('1');
    } else {viewSlide = 0;
    }
    //меняем цвет индикатора
    viewSlidesTwo.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    // меняем позицию всего слайда
    
    slider[galleryTwo].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Назад для второй галереи
btnPrev[galleryTwo].addEventListener('click', function() {
    viewSlidesTwo   .children[viewSlide].style.backgroundColor = 'white'; 
    if (viewSlide>0) {
        viewSlide--;
    } else {viewSlide=(viewSlidesTwo    .children.length-1);
    }
    viewSlidesTwo   .children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    slider[galleryTwo].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Вперед третьей галереи
btnNext[galleryThree].addEventListener('click', function() {
    console.log('Hello');
    console.log(viewSlidesThree.children[viewSlide]);
    //делаем индикатор сайта красным
 
    viewSlidesThree.children[viewSlide].style.backgroundColor = 'white'; 
    
           if (viewSlide<(viewSlidesThree.children.length-1)) {
        viewSlide++;
        console.log('1');
    } else {viewSlide = 0;
    }
    //меняем цвет индикатора
    viewSlidesThree.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    // меняем позицию всего слайда
    
    slider[galleryThree].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Назад третьей галереи
btnPrev[galleryThree].addEventListener('click', function() {
    viewSlidesThree.children[viewSlide].style.backgroundColor = 'white'; 
    if (viewSlide>0) {
        viewSlide--;
    } else {viewSlide=(viewSlidesThree.children.length-1);
    }
    viewSlidesThree.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    slider[galleryThree].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Вперед четвертой галереи
btnNext[galleryFour].addEventListener('click', function() {
    console.log('Hello');
    console.log(viewSlidesFour.children[viewSlide]);
    //делаем индикатор сайта красным
 
    viewSlidesFour.children[viewSlide].style.backgroundColor = 'white'; 
    
           if (viewSlide<(viewSlidesFour.children.length-1)) {
        viewSlide++;
        console.log('1');
    } else {viewSlide = 0;
    }
    //меняем цвет индикатора
    viewSlidesFour.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    // меняем позицию всего слайда
    
    slider[galleryFour].style.left = -viewSlide * viewport + 'px';
});

// обработка клика на кнопку Назад четвертой галереи
btnPrev[galleryFour].addEventListener('click', function() {
    viewSlidesFour.children[viewSlide].style.backgroundColor = 'white'; 
    if (viewSlide>0) {
        viewSlide--;
    } else {viewSlide=(viewSlidesFour.children.length-1);
    }
    viewSlidesFour.children[viewSlide].style.backgroundColor = 'rgb(239, 189, 125)'; 
    slider[galleryFour].style.left = -viewSlide * viewport + 'px';
});

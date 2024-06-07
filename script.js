'use strict'

let btnRight = document.querySelector('.slider__right-button');
let btnLeft  = document.querySelector('.slider__left-button');
let slider   = document.querySelector('.slider__view');

// индекс текущего изображения
let viewOffSet = 0;

// подписались насобытие кнопки
btnRight.addEventListener('click', sliderMoveToRight);
btnLeft.addEventListener('click', sliderMoveToLeft);

function sliderMoveToRight(){
    if(viewOffSet++ >=4){
        viewOffSet = 0;
    }
    slider.style.left = -892* viewOffSet + 'px';
    updateActiveDot();
}

function sliderMoveToLeft(){
    if(viewOffSet-- <=0){
        viewOffSet = 4;
    }
    slider.style.left = -892* viewOffSet + 'px';
    updateActiveDot();
}

function updateActiveDot() {
    let old = document.querySelector('.slider__dot_active');
    old.classList.remove('slider__dot_active');

    let element = document.querySelector(`.slider__dot:nth-child(${viewOffSet + 1})`);
    element.classList.add('slider__dot_active');
}


let btnRight1 = document.querySelector('.embla__wrapper__right_button');
let btnLeft1  = document.querySelector('.embla__wrapper__left_button');
let slider1   = document.querySelector('.embla__container');

// индекс текущего изображения
let viewOffSet1 = 0;

// подписались насобытие кнопки
btnRight1.addEventListener('click', sliderMoveToRight1);
btnLeft1.addEventListener('click', sliderMoveToLeft1);

function sliderMoveToRight1(){
    viewOffSet1+=4
    if(viewOffSet1++ >=17){
        viewOffSet1 = 0;
    }
    slider1.style.left = -220.5* viewOffSet1 + 'px';
}

function sliderMoveToLeft1(){
    viewOffSet1-=4
    if(viewOffSet1-- <=0){
        viewOffSet1 = 17;
    }
    slider1.style.left = -220.5* viewOffSet1 + 'px';
}



let btnRight2 = document.querySelector('.embla__wrapper__right_button1');
let btnLeft2  = document.querySelector('.embla__wrapper__left_button1');
let slider2   = document.querySelector('.embla__container1');

// индекс текущего изображения
let viewOffSet2 = 0;

// подписались насобытие кнопки
btnRight2.addEventListener('click', sliderMoveToRight2);
btnLeft2.addEventListener('click', sliderMoveToLeft2);

function sliderMoveToRight2(){
    viewOffSet2+=4
    if(viewOffSet2++ >=17){
        viewOffSet2 = 0;
    }
    slider2.style.left = -220.5* viewOffSet2 + 'px';
}

function sliderMoveToLeft2(){
    viewOffSet2-=4
    if(viewOffSet2-- <=0){
        viewOffSet2 = 17;
    }
    slider2.style.left = -220.5* viewOffSet2 + 'px';
}

let btnRight3 = document.querySelector('.embla__wrapper__right_button2');
let btnLeft3  = document.querySelector('.embla__wrapper__left_button2');
let slider3   = document.querySelector('.embla__container2');

// индекс текущего изображения
let viewOffSet3 = 0;

// подписались насобытие кнопки
btnRight3.addEventListener('click', sliderMoveToRight3);
btnLeft3.addEventListener('click', sliderMoveToLeft3);

function sliderMoveToRight3(){
    if(viewOffSet3++ >=9){
        viewOffSet3 = 0;
    }
    slider3.style.left = -441* viewOffSet3 + 'px';
}

function sliderMoveToLeft3(){
    if(viewOffSet3-- <=0){
        viewOffSet3 = 9;
    }
    slider3.style.left = -441* viewOffSet3 + 'px';
}

let btnRight4 = document.querySelector('.embla__wrapper__right_button3');
let btnLeft4  = document.querySelector('.embla__wrapper__left_button3');
let slider4   = document.querySelector('.embla__container3');

// индекс текущего изображения
let viewOffSet4 = 0;

// подписались насобытие кнопки
btnRight4.addEventListener('click', sliderMoveToRight4);
btnLeft4.addEventListener('click', sliderMoveToLeft4);

function sliderMoveToRight4(){
    if(viewOffSet4++ >=9){
        viewOffSet4 = 0;
    }
    slider4.style.left = -441* viewOffSet4 + 'px';
}

function sliderMoveToLeft4(){
    if(viewOffSet4-- <=0){
        viewOffSet4 = 9;
    }
    slider4.style.left = -441* viewOffSet4 + 'px';
}

// Получаем элемент кнопки
var scrollButton = document.querySelector('.scroll-button');

// Функция для обновления видимости кнопки
function updateButtonVisibility() {
    var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Если пользователь в самом верху страницы
    if (currentScrollTop <= 500) {
        scrollButton.style.display = 'none'; // Скрываем кнопку
    } else {
        scrollButton.style.display = ''; // Показываем кнопку
    }
}

// Добавляем обработчик события прокрутки страницы
window.addEventListener('scroll', function() {
    updateButtonVisibility(); // Обновляем видимость кнопки при прокрутке
}, false);

// Обновляем видимость кнопки при загрузке страницы
updateButtonVisibility();

// Добавляем обработчик события 'click' для кнопки
scrollButton.addEventListener('click', function() {
    // Используем метод scrollIntoView для перемещения в верхнюю часть страницы
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox
    document.body.scrollTop = 0; // Для Internet Explorer и Safari

    // Добавляем плавную анимацию для прокрутки
    document.body.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollBehavior = 'smooth';
 });

 
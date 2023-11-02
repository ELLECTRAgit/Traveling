// Анимация меню
const indicator = document.querySelector('.nav-indicator');
console.log('indicator');

console.log(indicator);
const items = document.querySelectorAll('.menu__item a');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('active');
    item.removeAttribute('style');
  });
  
  indicator.style.width = `${el.offsetWidth}px`;
  console.log('indicator.style.width' + indicator.style.width);
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  
    item.addEventListener('click', (e) => { handleIndicator(e.target)});
 
    item.classList.contains('active') && handleIndicator(item);


});

// Плавная прокрутка меню при нажатии
$(document).ready(function() {
    $('li a[href^="#"]').click(function() {
        let target = $(this).attr('href');
               $('html, body').animate({
            scrollTop: $(target).offset().top},1000);
           
            // return false;
        });
    });






// Бургер
       // Меню бургера меняет значок
$(document).ready(function() {
    $('.menu__burger').click(function(){
     $('.menu__mobile .menu').toggle(500);
     $(this).toggleClass('close');
             });
         });
         console.log('Задание');
         let i = 0; 
         j = 0; 
         for (i = 1; i <= 5; i++) { j--;
            console.log(j) }

         console.log(j);
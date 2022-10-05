const burger = document.querySelector('.hamBurger');
const close = document.querySelector('.icon-close');
const menu = document.querySelector('.menu');
// const sides = document.querySelector('.options')

burger.addEventListener('click', function(){
menu.style.visibility = 'visible'
burger.classList.add('hidden');

})

close.addEventListener('click', function(){
    menu.style.visibility = 'hidden'
    burger.classList.remove('hidden');
})
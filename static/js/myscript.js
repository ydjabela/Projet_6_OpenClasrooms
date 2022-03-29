var buttons = document.querySelectorAll('.button');
var a_elements = document.querySelectorAll('.text_boutton');
var backgroundButtons = document.querySelectorAll('.background__button');

for(let i=0;i<2;i++)
  {
      buttons[i].addEventListener('mouseenter', function(){
    a_elements[i].classList.add('is-white');
    backgroundButtons[i].classList.add('is-hover');
  });

  buttons[i].addEventListener('mouseleave', function(){
    a_elements[i].classList.remove('is-white');
    backgroundButtons[i].classList.remove('is-hover');
  });

  }
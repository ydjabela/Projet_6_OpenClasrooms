var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
const best_movies_right_button = document.querySelector('.best_movies_right_button');
const best_movies_left_button = document.querySelector('.best_movies_left_button');
var width_list = [-200, 0 , 200, 400, 600, 800, 1000];
var width_list_updated = false;
var width_inversed_list_updated = false;

// ------------------------------------------------------------------------------------------------------//

best_movies_right_button.addEventListener('click', event => {
  width_list_updated = true;
  if (width_inversed_list_updated){
    width_inversed_list_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list.length; pas++) {
      if (width_list[pas] === -200){width_list[pas] = 1000;}else{width_list[pas] -= 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list[6];}else{width = width_list[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list.length; pas++) {
    if (width_list[pas] === -200){width_list[pas] = 1000;}else{width_list[pas] -= 200;}
  }
}
);

// ------------------------------------------------------------------------------------------------------//


best_movies_left_button.addEventListener('click', event => {
  width_inversed_list_updated = true;
  if (width_list_updated){
    width_list_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list.length; pas++) {
      if (width_list[pas] === 1000){width_list[pas] = -200;}else{width_list[pas] += 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list[6];}else{width = width_list[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list.length; pas++) {
    if (width_list[pas] === 1000){width_list[pas] = -200;}else{width_list[pas] += 200;}
  }
}
);

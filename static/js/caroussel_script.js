var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
const best_movies_right_button = document.querySelector('.best_movies_right_button');
const best_movies_left_button = document.querySelector('.best_movies_left_button');
var width_list_best_movies = [-200, 0 , 200, 400, 600, 800, 1000];
var width_list_best_movies_updated = false;
var width_inversed_list_bm_updated = false;
const action_right_button = document.querySelector('.action_right_button');
const actions_left_button = document.querySelector('.actions_left_button');
var width_list_action = [-200, 0 , 200, 400, 600, 800, 1000];
var width_list_action_updated = false;
var width_inversed_list_ac_updated = false;


// ------------------------------------------------------------------------------------------------------//


best_movies_right_button.addEventListener('click', event => {
  width_list_best_movies_updated = true;
  if (width_inversed_list_bm_updated){
    width_inversed_list_bm_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list_best_movies.length; pas++) {
      if (width_list_best_movies[pas] === -200){width_list_best_movies[pas] = 1000;}else{width_list_best_movies[pas] -= 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list_best_movies[6];}else{width = width_list_best_movies[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list_best_movies.length; pas++) {
    if (width_list_best_movies[pas] === -200){width_list_best_movies[pas] = 1000;}else{width_list_best_movies[pas] -= 200;}
  }
}
);

// ------------------------------------------------------------------------------------------------------//


best_movies_left_button.addEventListener('click', event => {
  width_inversed_list_bm_updated = true;
  if (width_list_best_movies_updated){
    width_list_best_movies_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list_best_movies.length; pas++) {
      if (width_list_best_movies[pas] === 1000){width_list_best_movies[pas] = -200;}else{width_list_best_movies[pas] += 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list_best_movies[6];}else{width = width_list_best_movies[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list_best_movies.length; pas++) {
    if (width_list_best_movies[pas] === 1000){width_list_best_movies[pas] = -200;}else{width_list_best_movies[pas] += 200;}
  }
}
);

// ------------------------------------------------------------------------------------------------------//


action_right_button.addEventListener('click', event => {
  width_list_action_updated = true;
  if (width_inversed_list_ac_updated){
    width_inversed_list_ac_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list_action.length; pas++) {
      if (width_list_action[pas] === -200){width_list_action[pas] = 1000;}else{width_list_action[pas] -= 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies_categorie_1 .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list_action[6];}else{width = width_list_action[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list_action.length; pas++) {
    if (width_list_action[pas] === -200){width_list_action[pas] = 1000;}else{width_list_action[pas] -= 200;}
  }
}
);

// ------------------------------------------------------------------------------------------------------//


actions_left_button.addEventListener('click', event => {
  width_inversed_list_ac_updated = true;
  if (width_list_action_updated){
    width_list_action_updated =false;
    for (let x = 0; x < 2; x++) {
      for (let pas = 0; pas < width_list_action.length; pas++) {
      if (width_list_action[pas] === 1000){width_list_action[pas] = -200;}else{width_list_action[pas] += 200;}
    }
    }
  }
  var slides = document.querySelectorAll('#images_best_movies_categorie_1 .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  for (let pas = 0; pas < slidesArray.length; pas++) {
    var el = slidesArray[pas];
    if (pas===0){width = width_list_action[6];}else{width = width_list_action[pas-1];}
    el.style.left = width +'px';
  }
  for (let pas = 0; pas < width_list_action.length; pas++) {
    if (width_list_action[pas] === 1000){width_list_action[pas] = -200;}else{width_list_action[pas] += 200;}
  }
}
);
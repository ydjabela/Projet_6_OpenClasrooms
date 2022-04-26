const best_movies_right_button = document.querySelector('.best_movies_right_button');
const best_movies_left_button = document.querySelector('.best_movies_left_button');
const action_right_button = document.querySelector('.action_right_button');
const actions_left_button = document.querySelector('.actions_left_button');
const adventure_left_button = document.querySelector('.adventure_left_button');
const adventure_right_button = document.querySelector('.adventure_right_button');
const comedy_left_button = document.querySelector('.comedy_left_button');
const comedy_right_button = document.querySelector('.comedy_right_button');
var width_list_best_movies = [];
var el;


// ------------------------------------------------------------------------------------------------------//

function navigation_left_raght(left, right, elementid){
  listimg = document.getElementById(elementid).getElementsByClassName('slide');
  for(var i = 0; i < listimg.length; i++){
    width_list_best_movies[i] = listimg[i].style.left;
  }
  console.log(Math.max(width_list_best_movies))
  var slides = document.querySelectorAll('#' + elementid + ' .slide');
  var slidesArray = Array.prototype.slice.call(slides);
  if (left === true){
    for (let pas = 0; pas < slidesArray.length; pas++) {
      el = slidesArray[pas];
      if (pas===6){width = width_list_best_movies[0];}else{width = width_list_best_movies[pas+1];}
      if (el.style.left==='1000px'){el.style.zIndex=1;}else{el.style.zIndex=2;}
      el.style.left = width;
    }
  } else{
      for (let pas = 0; pas < slidesArray.length; pas++) {
        el = slidesArray[pas];
        if (pas===0){width = width_list_best_movies[6];}else{width = width_list_best_movies[pas-1];}
        if (el.style.left==='-200px'){el.style.zIndex=1;}else{el.style.zIndex=2;}
        el.style.left = width;
      }
  }
}

// ------------------------------------------------------------------------------------------------------//


best_movies_right_button.addEventListener('click', event => {
  navigation_left_raght(false, true, 'images_best_movies');
}
);

// ------------------------------------------------------------------------------------------------------//

best_movies_left_button.addEventListener('click', event => {
  navigation_left_raght(true, false, 'images_best_movies');
}
);

// ------------------------------------------------------------------------------------------------------//


action_right_button.addEventListener('click', event => {
  navigation_left_raght(false, true, 'images_best_movies_categorie_1');
}
);

// ------------------------------------------------------------------------------------------------------//

actions_left_button.addEventListener('click', event => {
  navigation_left_raght(true, false, 'images_best_movies_categorie_1');
}
);

// ------------------------------------------------------------------------------------------------------//


adventure_right_button.addEventListener('click', event => {
  navigation_left_raght(false, true, 'images_best_movies_categorie_2');
}
);

// ------------------------------------------------------------------------------------------------------//

adventure_left_button.addEventListener('click', event => {
  navigation_left_raght(true, false, 'images_best_movies_categorie_2');
}
);

// ------------------------------------------------------------------------------------------------------//


comedy_right_button.addEventListener('click', event => {
  navigation_left_raght(false, true, 'images_best_movies_categorie_3');
}
);

// ------------------------------------------------------------------------------------------------------//

comedy_left_button.addEventListener('click', event => {
  navigation_left_raght(true, false, 'images_best_movies_categorie_3');
}
);

// ------------------------------------------------------------------------------------------------------//

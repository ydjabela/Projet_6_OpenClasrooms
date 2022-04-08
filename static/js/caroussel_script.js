var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
const best_movies_right_button = document.querySelector('.best_movies_right_button');
var width_list = [-200, 0 , 200, 400, 600, 800, 1000]
var width_list_updated = false
console.log(width_list)
best_movies_right_button.addEventListener('click', event => {
    console.log(width_list)
    width_list_updated = true
    var slides = document.querySelectorAll('#images_best_movies .slide');
    var slidesArray = Array.prototype.slice.call(slides);
    for (let pas = 0; pas < slidesArray.length; pas++) {
        var el = slidesArray[pas]
        if (pas===0){
            width = width_list[6]
        }else{
            width = width_list[pas-1]
        }
        el.style.left = width +'px';
    }
    for (let pas = 0; pas < width_list.length; pas++) {
        if (width_list[pas] === -200){
            width_list[pas] = 1000
        }else{
            width_list[pas] -= 200
        }
    }
    console.log(width_list)
    }
);

const best_movies_left_button = document.querySelector('.best_movies_left_button');
best_movies_left_button.addEventListener('click', event => {
console.log(width_list)
    if (width_list_updated){
        width_list_updated =false;
        for (let pas = 0; pas < width_list.length; pas++) {
        if (width_list[pas] === 1000){
            width_list[pas] = -200
        }else{
            width_list[pas] += 200
        }
    }
    }
    console.log(width_list)
    var slides = document.querySelectorAll('#images_best_movies .slide');
    var slidesArray = Array.prototype.slice.call(slides);
    for (let pas = 0; pas < slidesArray.length; pas++) {
        var el = slidesArray[pas]
        if (pas===0){
            width = width_list[6]
        }else{
            width = width_list[pas-1]
        }
        el.style.left = width +'px';
    }
    for (let pas = 0; pas < width_list.length; pas++) {
        if (width_list[pas] === 1000){
            width_list[pas] = -200
        }else{
            width_list[pas] += 200
        }
    }
    console.log(width_list)
    }


);

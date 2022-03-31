var buttons = document.querySelectorAll('.button');
var a_elements = document.querySelectorAll('.text_boutton');
var backgroundButtons = document.querySelectorAll('.background__button');
for(let i=0;i<2;i++) {
    buttons[i].addEventListener('mouseenter', function(){
        a_elements[i].classList.add('is-white');
        backgroundButtons[i].classList.add('is-hover');
  });
    buttons[i].addEventListener('mouseleave', function(){
        a_elements[i].classList.remove('is-white');
        backgroundButtons[i].classList.remove('is-hover');
  });
 }

// Defining async function
async function get_data(url) {
    try{
        // Storing response
        const response = await fetch(url);
        // Storing data in form of JSON
        var data = await response.json();
        return data
    } catch (error) {
    console.log(error);
  }
}
// function to get  url film
async function get_url(url) {
    let url_json = await get_data(url);
    let result = url_json['results'][0]['url'];
    return result
}
// function to get  all informations film
async function get_url_data(url) {
    let url_data_json = await get_url(url);
    let data_json = await get_data(url_data_json);
    let result = data_json;
    return result
}
// function to render  all informations film to html
async function render_get_url_data(url) {
    let url_data_json = await get_url_data(url);
    let result = url_data_json;
    document.getElementById("TITRE").innerHTML = result['title'];
    document.getElementById("GENRE").innerHTML = result['genres'];
    document.getElementById("DATE_SORTIE").innerHTML = result['date_published'];
    document.getElementById("RATED").innerHTML = result['rated'];
    document.getElementById("SCORE_IMDB").innerHTML = result['imdb_score'];
    document.getElementById("REALISATEUR").innerHTML = result['writers'];
    document.getElementById("ACTEURS").innerHTML = result['actors'];
    document.getElementById("PAYS").innerHTML = result['countries'];
    document.getElementById("DUREE").innerHTML = result['duration'];
    document.getElementById("RESULTAT_BACK").innerHTML = result['title'];
    document.getElementById("RESUME").innerHTML = result['long_description'];
    var img = document.createElement("IMG");
    img.src = result['image_url'];
    document.getElementById('image').appendChild(img);
    return result
}
// api url
const URLS_BEST_MOVIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
// Calling that async function to get a best film
render_get_url_data(URLS_BEST_MOVIES);

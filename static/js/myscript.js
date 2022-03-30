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
const URLS_BEST_MOVIES = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";


// api url

// Defining async function
async function get_data(url) {
    try{
        // Storing response
        const response = await fetch(url);

        // Storing data in form of JSON
        var data = await response.json();
        console.log(data);
        return data
    } catch (error) {
    console.log(error);
  }
}

async function get_url(url) {

    let url_json = await get_data(url);
    let result = url_json['results'][0];
    console.log(result);
    return result
}
// Calling that async function
get_url(URLS_BEST_MOVIES);


/*
function request(handleData,url) {
    $(document).ready(function () {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                handleData(data)

            },
            error: function () {
                console.log('Error in Database');
            }
        });
    });
}






function get_data(url){
    request(function (json_url) {
    let data = json_url;


},url);
}

function get_url(url){
    request(function (json_url) {
    let url1 = json_url.results[0]['url'];
    get_data(url1)
},url);
}

function data_render(){

}


get_url(URLS_BEST_MOVIES);

$(document).ready(function() {
    $.ajax({
        url: URLS_BEST_MOVIES,
        type: 'GET',
        dataType: 'json',
        success: function(data, textStatus, xhr) {
           console.log(data.results[0]['url']);
           URL_BEST_MOVIES = data.results[0]['url'];

           return data.results[0]['url'];
            },
        error: function(xhr, textStatus, errorThrown) {
            console.log('Error in Database');
        }
    });
});

$(document).ready(function() {
    $.ajax({
        url: URLS_BEST_MOVIES,
        type: 'GET',
        dataType: 'json',
        success: function(data, textStatus, xhr) {
           console.log(data.results[0]['url']);
           URL_BEST_MOVIES = data.results[0]['url'];

           document.getElementById("TITRE").innerHTML = data.results[0]['title'];
           document.getElementById("GENRE").innerHTML = data.results[0]['genres'];
           document.getElementById("DATE_SORTIE").innerHTML = data.results[0]['year'];
           document.getElementById("RATED").innerHTML = data.results[0]['votes'];
           document.getElementById("SCORE_IMDB").innerHTML = data.results[0]['imdb_score'];
           document.getElementById("REALISATEUR").innerHTML = data.results[0]['writers'];
           document.getElementById("ACTEURS").innerHTML = data.results[0]['actors'];
           document.getElementById("PAYS").innerHTML = data.results[0]['title'];
           document.getElementById("DUREE").innerHTML = data.results[0]['title'];
           document.getElementById("RESULTAT_BACK").innerHTML = data.results[0]['title'];
           document.getElementById("RESUME").innerHTML = data.results[0]['title'];
           return data.results[0]['url'];
            },
        error: function(xhr, textStatus, errorThrown) {
            console.log('Error in Database');
        }
    });
});
*/


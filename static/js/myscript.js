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
    try{
        let url_json = await get_data(url);
        let result = url_json['results'][0]['url'];
        return result
    } catch (error) {
    console.log(error);
  }
}
// function to get  all informations film
async function get_url_data(url) {
    try{
        let url_data_json = await get_url(url);
        let data_json = await get_data(url_data_json);
        let result = data_json;
        return result
    } catch (error) {
    console.log(error);
  }
}
// function to render  all informations film to html
async function render_get_url_data(url) {
    try{
        let url_data_json = await get_url_data(url);
        let result = url_data_json;
        document.getElementById("TITRE").innerHTML = 'Titre : ' + result['title'];
        document.getElementById("ORIGINAL_TITLE").innerHTML = 'Titre : ' + result['original_title'];
        document.getElementById("GENRE").innerHTML ="Genre :  " + result['genres'];
        document.getElementById("DATE_SORTIE").innerHTML ="Date de sortie : " + result['date_published'];
        document.getElementById("RATED").innerHTML = "Rated :" + result['rated'];
        document.getElementById("SCORE_IMDB").innerHTML = "Score Imdb : " + result['imdb_score'];
        document.getElementById("REALISATEUR").innerHTML ="Réalisateur : " +  result['writers'];
        document.getElementById("ACTEURS").innerHTML ="Acteurs :" +  result['actors'];
        document.getElementById("PAYS").innerHTML ="Pays d’origine : " +  result['countries'];
        document.getElementById("DUREE").innerHTML ="Durée : " +  result['duration'] + "min";
        document.getElementById("RESULTAT_BACK").innerHTML ="Résultat au Box Office : " +  result['title'];
        document.getElementById("RESUME").innerHTML ="Résumé du film : " +  result['description'];
        document.getElementById("RESUME_LONG").innerHTML ="Résumé du film : " +  result['long_description'];
        var img = document.createElement("IMG");
        img.src = result['image_url'];
        document.getElementById('image').appendChild(img);
        return result
    } catch (error) {
    console.log(error);
  }
}

// 1st categorie
async function get_urls_names(url) {
    try{
        let urls_image = [];
        let titles = [];
        var url_json = await get_data(url);
        for (let pas = 1; pas < 5; pas++) {
            let url_image = url_json['results'][pas]['image_url'];
            let title = url_json['results'][pas]['title'];
            urls_image.push(url_image);
            titles.push(title);
        }
        let next_page = url_json['next'];
        url_json = await get_data(next_page);
        for (let pas = 0; pas < 3; pas++) {
            let url_image = url_json['results'][pas]['image_url'];
            let title = url_json['results'][pas]['title'];
            urls_image.push(url_image);
            titles.push(title);
        }
        return  {
            'urls_image': urls_image,
            'titles': titles
          };
    } catch (error) {
    console.log(error);
  }
}
// function to get  all informations film
async function render_get_urls_data_best_movies(url, elementid) {
    try{
        let {urls_image, titles} = await get_urls_names(url);
        for (let pas = 0; pas < 7; pas++) {
            var img = document.createElement("IMG");
            img.src = urls_image[pas];
            img.style.marginRight = '15px';
            img.title = titles[pas];
            document.getElementById(elementid).appendChild(img);
        }
    } catch (error) {
    console.log(error);
  }
}
// api url
const URL_BEST_MOVIE = "http://localhost:8000/api/v1/titles/?sort_by=-imdb_score";
// Calling that async function to get a best film
render_get_url_data(URL_BEST_MOVIE);
// Calling function to get information  1 st categories

const URLS_BEST_MOVIES = [
    {
        'url':URL_BEST_MOVIE,
        'elmentid': 'images_best_movies'
    },
    {
        'url': "http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score",
        'elmentid': 'images_best_movies_categorie_1'
    },
    {
        'url':"http://localhost:8000/api/v1/titles/?genre=Adventure&sort_by=-imdb_score",
        'elmentid': 'images_best_movies_categorie_2'
    },
    {
        'url': "http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score",
        'elmentid': 'images_best_movies_categorie_3'
    },
];

 for (let j = 0; j < MOVIE_CATEGORIES.length; j++) {
     render_get_urls_data_best_movies(URLS_BEST_MOVIES['url'], URLS_BEST_MOVIES['elmentid']);
 }


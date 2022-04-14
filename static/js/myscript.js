
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
        let result = await get_data(url_data_json);
        return result
    } catch (error) {
    console.log(error);
  }
}
// function to render  all informations film to html
async function render_get_url_data(url) {
    try{
        let result = await get_url_data(url);
        document.getElementById("ORIGINAL_TITLES").innerHTML = 'Titre : ' + result['original_title'];
        document.getElementById("RESUMES").innerHTML ="Résumé du film : " +  result['description'];
        var img = document.createElement("IMG");
        img.src = result['image_url'];
        img.style.textAlign= 'center';
        img.onclick = function() {
            window.location.href = '#descreption_modal';
            document.getElementById("TITREs").innerHTML = 'Titre : ' + result['title'];
            document.getElementById("GENREs").innerHTML ="Genre :  " + result['genres'];
            document.getElementById("DATE_SORTIEs").innerHTML ="Date de sortie : " + result['date_published'];
            document.getElementById("RATEDs").innerHTML = "Rated :" + result['rated'];
            document.getElementById("SCORE_IMDBs").innerHTML = "Score Imdb : " + result['imdb_score'];
            document.getElementById("REALISATEURs").innerHTML ="Réalisateur : " +  result['writers'];
            document.getElementById("ACTEURSs").innerHTML ="Acteurs :" +  result['actors'];
            document.getElementById("PAYSs").innerHTML ="Pays d’origine : " +  result['countries'];
            document.getElementById("DUREEs").innerHTML ="Durée : " +  result['duration'] + "min";
            document.getElementById("RESULTAT_BACKs").innerHTML ="Résultat au Box Office : " +  result['title'];
            document.getElementById("RESUME_LONGs").innerHTML ="Résumé du film : " +  result['long_description'];
        };

        document.getElementById('image').appendChild(img);
        return result
    } catch (error) {
    console.log(error);
  }
}

// 1st categorie
async function get_urls_names(url) {
    try{
        let result = [
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },
            {
                'urls_image':'','title':'','genres':'', 'date_published':'', 'rated':'','imdb_score':'', 'writers':'',
                'actors':'', 'countries':'', 'duration':'', 'description':'', 'long_description':''
            },

        ];
        var i = 0;
        let url_data_json = await get_data(url);
        for (let pas = 1; pas < 5; pas++) {
            result[i]['urls_image'] = url_data_json['results'][pas]['image_url'];
            var url_json = await get_data(url_data_json['results'][pas]['url']);
            result[i]['title'] = url_json['title'];
            result[i]['genres'] = url_json['genres'];
            result[i]['date_published'] = url_json['date_published'];
            result[i]['rated'] = url_json['rated'];
            result[i]['imdb_score'] = url_json['imdb_score'];
            result[i]['writers'] = url_json['writers'];
            result[i]['actors'] = url_json['actors'];
            result[i]['countries'] = url_json['countries'];
            result[i]['duration'] = url_json['duration'];
            result[i]['title'] = url_json['title'];
            result[i]['description'] = url_json['description'];
            result[i]['long_description'] = url_json['long_description'];
            i += 1;
        }
        let next_page = url_data_json['next'];
        url_data_json = await get_data(next_page);
        for (let pas = 0; pas < 3; pas++) {
            result[i]['urls_image'] = url_data_json['results'][pas]['image_url'];
            url_json = await get_data(url_data_json['results'][pas]['url']);
            result[i]['title'] = url_json['title'];
            result[i]['genres'] = url_json['genres'];
            result[i]['date_published'] = url_json['date_published'];
            result[i]['rated'] = url_json['rated'];
            result[i]['imdb_score'] = url_json['imdb_score'];
            result[i]['writers'] = url_json['writers'];
            result[i]['actors'] = url_json['actors'];
            result[i]['countries'] = url_json['countries'];
            result[i]['duration'] = url_json['duration'];
            result[i]['title'] = url_json['title'];
            result[i]['description'] = url_json['description'];
            result[i]['long_description'] = url_json['long_description'];
            i += 1;
        }
        return  result
    } catch (error) {
    console.log(error);
  }
}
// function to get  all informations film
async function render_get_urls_data_best_movies(url, elementid) {
    try{
        let result = await get_urls_names(url);
        for (let pas = 0; pas < 7; pas++) {
            var img = document.createElement("IMG");
            img.src = result[pas]['urls_image'];
            img.title = result[pas]['title'];
            img.style.marginRight='15px';
            var width = 200 * pas;
            width -= 200;
            img.style.left = width + 'px';
            img.onclick = function() {
                window.location.href = '#id01';
                document.getElementById("TITRE").innerHTML = 'Titre : ' + result[pas]['title'];
                document.getElementById("GENRE").innerHTML ="Genre :  " + result[pas]['genres'];
                document.getElementById("DATE_SORTIE").innerHTML ="Date de sortie : " + result[pas]['date_published'];
                document.getElementById("RATED").innerHTML = "Rated :" + result[pas]['rated'];
                document.getElementById("SCORE_IMDB").innerHTML = "Score Imdb : " + result[pas]['imdb_score'];
                document.getElementById("REALISATEUR").innerHTML ="Réalisateur : " +  result[pas]['writers'];
                document.getElementById("ACTEURS").innerHTML ="Acteurs :" +  result[pas]['actors'];
                document.getElementById("PAYS").innerHTML ="Pays d’origine : " +  result[pas]['countries'];
                document.getElementById("DUREE").innerHTML ="Durée : " +  result[pas]['duration'] + "min";
                document.getElementById("RESULTAT_BACK").innerHTML ="Résultat au Box Office : " +  result[pas]['title'];
                document.getElementById("RESUME_LONG").innerHTML ="Résumé du film : " +  result[pas]['long_description'];
            };
            img.setAttribute('class', "slide");
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

for (let j = 0; j < URLS_BEST_MOVIES.length; j++) {
     render_get_urls_data_best_movies(URLS_BEST_MOVIES[j]['url'], URLS_BEST_MOVIES[j]['elmentid']);
 }

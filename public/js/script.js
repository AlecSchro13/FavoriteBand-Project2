
let searchButton = document.getElementById('searchBtn');
let artistInfo = document.getElementById('artistInfo');
let artist = document.getElementById('artist');
let searchPage = document.getElementById('searchPage');
// let  = document.getElementById('searchBtn');
// let searchButton = document.getElementById('searchBtn');
// let searchButton = document.getElementById('searchBtn');
// let searchButton = document.getElementById('searchBtn');
// let searchButton = document.getElementById('searchBtn');
// let searchButton = document.getElementById('searchBtn');

function getResults (){
let inputText = document.getElementById("song-search").value;
let artistSearch = inputText;
if(!artistSearch){
    return;
}
}

function getArtist () {
    let requestUrl = "https://www.theaudiodb.com/api/v1/json/523532/search.php?s=drake";
    
    
        fetch(requestUrl).then(function (response){
            return response.json();

        })
        .then (function(data){
           let artistName = data.artists[0].strArtist;
            console.log(artistName);
            let getGenre = data.artists[0].strGenre;
            let artistStyle = data.artists[0].strStyle;

            console.log(getGenre);
            console.log(artistStyle);
        }
        )
    };


    function searchArtist (artistSearch){
        let requestUrl = "https://theaudiodb.com/api/v1/json/2/artist.php?i=" + artistSearch;
        fetch(requestUrl)
        .then(function(response) {
            return response.json();
        }).then(function(data){
            artistName = data.artists[x].strArtist;
            getGenre = data.artists[x].strGenre;
            console.log(artistName);
            console.log(getGenre);
            artistStyle = data.artists[x].strStyle;
            console.log(artistStyle);

        })

    };


    function albums (artistSearch){
        let requestUrl = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=drake";

        fetch(requestUrl)
        .then(function (response){
            return response.json();
        }).then (function(data){
            albumName = data.album[x].strAlbum;
        

        })
    }
    
    

getArtist();
getResults();
document.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        console.log('hello')
        getResults();
        $('input[type="text"]').val('');
    }
});


searchButton.addEventListener("click", searchArtist);
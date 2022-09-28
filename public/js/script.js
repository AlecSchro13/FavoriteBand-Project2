


function getResults (){
let inputText = document.getElementById("song-search").value;
let artistSearch = inputText;
if(!artistSearch){
    return;
}
}

function getArtist (artistSearch) {
    let requestUrl = "https://theaudiodb.com/api/v1/json/EFDDA/searchalbum.php?s=" + artistSearch;
    
    
        fetch(requestUrl).then(function (response){
            return response.json();

        })
        .then (function(data){
            albumName = data.album[x].strAlbum;
            console.log(albumName)
        }
        )
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


searchButton.addEventListener("click", getArtist);
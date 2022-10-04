
let searchButton = document.getElementById('searchBtn')
let artist = document.getElementById('artistSearch')


function Results () {
    let inputText = document.querySelector(".searchArtist").value;
    let artistSearch = inputText.trim;
    if(!artistSearch){
        return;
    }
}
    
    function getArtist (artistSearch) {
        let requestUrl = "https://www.theaudiodb.com/api/v1/json/523532/search.php?s=" + artistSearch;
        
        
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
    
    
        function albums (){
            let requestUrl = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=Drake";
    
            fetch(requestUrl)
            .then(function (response){
                return response.json();
            }).then (function(data){
                for (let x = 0; x < data.album.length; x++)
                albumName = data.album[x].strAlbum;
            console.log(albumName);
                console.log(data.album[1]);
            })
        }
        


    function songs() {
        let requestUrl = "https://theaudiodb.com/api/v1/json/523532/track.php?m=drake";
        fetch(requestUrl)
            .then(function (response){
                return response.json();
            }).then (function(data){
                let trackName = data.track[0].strTrack;
                console.log(trackName);

    })
};
    songs()  
    albums();
    getArtist();
    // getResults();
    document.addEventListener("keydown", function(event){
        if(event.key == "Enter"){
            console.log('hello')
            getResults();
            $('input[type="text"]').val('');
        }
    });
    
    
    // searchButton.addEventListener("click", searchArtist);
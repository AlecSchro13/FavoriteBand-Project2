
// let searchButton = document.getElementById("searchBtn")
// let artist = document.getElementById('artistSearch')
// let artistSearchEl = getElementById('artistSearchEl')

function Results() {
    let inputText = document.getElementById("searchVal").value;
    let artistSearch = inputText;
    if (!artistSearch) {
        return;
    }
    $('input[type="text"]').val('')
    albums(artistSearch);
    getArtist(artistSearch)
    songs(artistSearch)
}

function getArtist(artistSearch) {
    let requestUrl = "https://www.theaudiodb.com/api/v1/json/523532/search.php?s=" + artistSearch;


    fetch(requestUrl).then(function (response) {
        return response.json();

    })
        .then(function (data) {
            let artistName = data.artists[0].strArtist;
            console.log(artistName);
            let getGenre = data.artists[0].strGenre;
            let artistStyle = data.artists[0].strStyle;

            console.log(getGenre);
            console.log(artistStyle);

            fetch("/api/artist/", {
                method: "POST",
                body: JSON.stringify({
                    name: artistName,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            document.location.reload

        }
        )

};


function albums(artistSearch) {
    let requestUrl = "https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=" + artistSearch;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            // for (let x = 0; x < data.album.length; x++)
            albumName = data.album[0].strAlbum;
            console.log(albumName);

        })
}



function songs(artistSearch) {
    let requestUrl = "https://theaudiodb.com/api/v1/json/523532/track.php?m=" + artistSearch;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        }).then(function (data) {
            let trackName = data.track[0].strTrack;
            console.log(data);

        })
};
// songs()  
// albums();
// getArtist();
document.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        console.log('hello')
        Results();
        $('input[type="text"]').val('');
    }
});


// searchButton.addEventListener("click", Results);

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const searchBar = document.querySelector('.search-bar')
    const searchString = searchBar.value;
    const urlEncodedSearchString = encodeURIComponent(searchString);

    fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        movieData = data.Search
        renderMovies(data.Search)
    })


    function renderMovies (movies) {
        const movieHtmlArray = movies.map(function(currentMovie){
            return `<div class="movie col-4">
            <img src="${currentMovie.Poster}"<br/>
            <h2>${currentMovie.Title}</h2>
            <time datetime="\`0001\`">${currentMovie.Year}</time><br>
            <button class="add-button" data-imdbid="${currentMovie.imdbID}">Add Me!</button><br/>
            </div>
            `
        });
    
        results = document.querySelector("#results");
        results.innerHTML = movieHtmlArray.join('')
    };

    
    
})

const movie = document.querySelector("#movie");


document.addEventListener('DOMContentLoaded', function(event){

    // localStorage.setItem("watchlist", null)
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-button')) {
            let movieID = event.target.dataset.imdbid
            saveToWatchList(movieID)
        }
      });
});
  

function saveToWatchList (movieID) {
    
    const movie = movieData.find(function(currentMovie){ 
        return currentMovie.imdbID == movieID; 
});

let watchlistJSON = localStorage.getItem('watchlist');
let watchlist = JSON.parse(watchlistJSON);

    if (watchlist == null) {
        watchlist = []
    }

    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);

    
}

const searchForm = document.getElementById('search-form');
const searchBar = document.querySelector(".search-bar")

searchForm.addEventListener('keyup', (e) => {

const searchString = searchBar.value;
const urlEncodedSearchString = encodeURIComponent(searchString);

fetch("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
.then((res) => res.json())
.then((data) => {
  renderMovies(data.Search);
});
})


function renderMovies(movies) {
    const movieHtmlArray = movies.map(function (currentMovie) {

    return `<div class='movie col-4'>
            <img src="${currentMovie.Poster}"/>
            <h2>${currentMovie.Title}</h2>
            <time>${currentMovie.Year}</time>
            <button class="buttons">Add</button>
        </div>`
    });
  
    results.innerHTML = movieHtmlArray.join("");
}

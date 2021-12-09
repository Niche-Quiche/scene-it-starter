



function renderMovies(movies) {
    const movieHtmlArray = movies.map(function (currentMovie) {


    return `<div class='movie col-4'>
            <img src="${currentMovie.Poster}"/>
            <h2>${currentMovie.Title}</h2>
            <time>${currentMovie.Year}</time>
            <button class="buttons">Add</button>
        </div>`
    });
    const results = document.querySelector("#results");
    results.innerHTML = movieHtmlArray.join("");
}




document.addEventListener('DOMContentLoaded', function() {
      // code here will execute after the document is loaded
    renderMovies(movieData)

});


const searchForm = document.getElementById('search-form');

searchForm.addEventListener('keyup', (e) => {
      // targets the characters put in search form
    const searchString = e.target.value;
    console.log(searchString)
      // Looks through titles to identify search, needs the whole card still, not just the title
    const titles = [movieData[0].Title, movieData[1].Title, movieData[2].Title, movieData[3].Title, movieData[4].Title, movieData[5].Title, movieData[6].Title, movieData[7].Title, movieData[8].Title, movieData[9].Title]
      //looks thru titles to see if ANY of the characters inputed match a movie title
    const filteredCharacters = titles.filter( i => {
        return i.includes(searchString);
        
})

// Shows matched titles as you type
results.innerHTML = filteredCharacters.join("")
});




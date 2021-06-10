const SHORT_FILM_DURATION = 40;
function search(searchQuery, movies) {
  const { search = "", shortfilm = false, saved = false } = searchQuery;

  const filterKeyword = (movie) => {
    return JSON.stringify(movie.nameRU)
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  const filterShortfilm = (movie) => {
    return shortfilm ? movie.duration <= SHORT_FILM_DURATION : true;
  };

  return movies.filter(filterShortfilm).filter(filterKeyword);
}

export default search;

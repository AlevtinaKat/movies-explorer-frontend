function search(searchQuery, movies) {
  const { search = "", shortfilm = false } = searchQuery;

  const filterKeyword = (movie) => {
    return JSON.stringify(movie.nameRU)
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  const filterShortfilm = (movie) => {
    return shortfilm ? movie.duration <= 40 : true;
  };

  return movies.filter(filterShortfilm).filter(filterKeyword);
}

export default search;

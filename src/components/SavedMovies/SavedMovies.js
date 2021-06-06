import "../../index.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <body className="page">
      <div className="page__container">
        <main className="main">
          <Header movies="true" />
          <SearchForm />
          <MoviesCardList saved="true" />
          <Footer />
        </main>
      </div>
    </body>
  );
}

export default SavedMovies;

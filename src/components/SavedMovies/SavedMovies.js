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
          <Header movies="true" isLoggedIn={props.isLoggedIn} />
          <SearchForm onSubmit={props.onSubmit} />
          <MoviesCardList
            saved="true"
            cards={props.cards}
            saveMovie={props.saveMovie}
            deleteMovie={props.deleteMovie}
          />
          <Footer />
        </main>
      </div>
    </body>
  );
}

export default SavedMovies;

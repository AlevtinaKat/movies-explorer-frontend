import "../../index.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
  return (
    <body className="page">
      <div className="page__container">
        <Header movies="true" />
        <SearchForm />
        <MoviesCardList />
        <Footer />
      </div>
    </body>
  );
}

export default Movies;

import "../../index.css";
import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
const ZERO_NUMBER = 0;
const ADD_MOVIES = 4;

function MoviesCardList(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesToShow, setMoviesToShow] = useState(8);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, [isLoading]);

  function isShowButton() {
    return props.cards.length > moviesToShow;
  }

  function showMoreButton() {
    return (
      <div className="cards__more">
        <button className="cards__more-button" onClick={addMovies}>
          Ещё
        </button>
      </div>
    );
  }

  function addMovies(e) {
    e.preventDefault();
    setMoviesToShow(moviesToShow + ADD_MOVIES);
    setIsLoading(true);
  }

  function isSaved(savedCards, card) {
    if (savedCards) {
      return savedCards.find((savedCard) => savedCard.nameRU === card.nameRU);
    }
    return "";
  }

  const renderCards = () => {
    if (props.cards.length > 0) {
      return (
        <div className="cards">
          {props.cards.slice(ZERO_NUMBER, moviesToShow).map((card) => (
            <MoviesCard
              key={card.id || card._id}
              saved={props.saved}
              card={card}
              savedCard={isSaved(props.savedCards, card)}
              saveMovie={props.saveMovie}
              deleteMovie={props.deleteMovie}
            />
          ))}
        </div>
      );
    } else {
      return <p className="cards__empty">Ничего не найденно.</p>;
    }
  };

  return (
    <section className="movie-cards">
      {isLoading ? <Preloader /> : renderCards()}
      {isShowButton() ? showMoreButton() : ""}
    </section>
  );
}

export default MoviesCardList;

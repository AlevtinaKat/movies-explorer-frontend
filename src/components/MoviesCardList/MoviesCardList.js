import "../../index.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movie-cards">
      <div className="cards">
        <MoviesCard liked="true" />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <div className="cards__more">
        <button class="cards__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;

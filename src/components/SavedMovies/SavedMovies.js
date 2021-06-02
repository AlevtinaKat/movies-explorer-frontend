import "../../index.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies(props) {
  return (
    <section className="movie-cards">
      <div className="cards">
        <MoviesCard />
      </div>
      <div className="cards__more">
        <button class="cards__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default SavedMovies;

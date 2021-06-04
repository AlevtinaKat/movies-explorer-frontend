import "../../index.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movie-cards">
      <div className="cards">
        <MoviesCard liked={props.liked} saved={props.saved} />
        <MoviesCard liked={props.liked} saved={props.saved} />
        <MoviesCard liked={props.liked} saved={props.saved} />
        <MoviesCard liked={props.liked} saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
        <MoviesCard saved={props.saved} />
      </div>
      <div className="cards__more">
        <button class="cards__more-button">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;

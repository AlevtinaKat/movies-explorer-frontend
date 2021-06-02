import "../../index.css";
import film from "../../images/film.svg";
import heart from "../../images/heart.svg";
import redHeart from "../../images/redHeart.svg";

function MoviesCard(props) {
  return (
    <div className="card">
      <img className="card__foto" src={film} alt="33слова о дизайне" />
      <div className="card__info">
        <p className="card__title">33слова о дизайне</p>
        <button className="card__button" type="button">
          <img src={redHeart} alt="Сердце" />
        </button>
      </div>
      <p className="card__time">1ч 20мин</p>
    </div>
  );
}

export default MoviesCard;

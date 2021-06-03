import "../../index.css";
import film from "../../images/film.svg";

function MoviesCard(props) {
  const heartClassName = (
    `card__button ${props.liked ? 'card__button-red' : ''}`
  ); 

  return (
    <div className="card">
      <img className="card__foto" src={film} alt="33слова о дизайне" />
      <div className="card__info">
        <p className="card__title">33слова о дизайне</p>
        <button className={heartClassName} type="button">
        </button>
      </div>
      <p className="card__time">1ч 20мин</p>
      </div> 
  );
}

export default MoviesCard;

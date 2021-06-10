import React from "react";
import "../../index.css";
import { useState } from "react";
import { getFullImageUrl } from "../../utils/fullImage";

function MoviesCard(props) {
  const [saved, setSaved] = useState(props.savedCard ? true : false);
  const [cardId, setCardId] = useState(props.savedCard ? props.savedCard._id : "");

  const convertTime = (durationMinutes) => {
    const hours = Math.floor(durationMinutes / 60);
    const minutes = Math.floor(durationMinutes % 60);
    return `${hours}ч ${minutes}м`;
  };

  const heartClassName = `card__button ${saved ? "card__button-red" : ""} ${
    props.saved ? "card__button-cross" : ""
  }`;

  function updateMovie() {
    if (saved || props.saved) {
      props.deleteMovie(cardId || props.card._id).then((id) => {
        setCardId(id);
      });
      setSaved(false);
    } else {
      props.saveMovie(props.card).then((id) => {
        setCardId(id);
      });
      setSaved(true);
    }
  }

  return (
    <div className="card">
      <img
        className="card__foto"
        src={getFullImageUrl(props.card)}
        alt={props.card.nameRU}
      />
      <div className="card__info">
        <p className="card__title">{props.card.nameRU}</p>
        <button className={heartClassName} onClick={updateMovie}></button>
      </div>
      <p className="card__time">{convertTime(props.card.duration)}</p>
    </div>
  );
}

export default MoviesCard;

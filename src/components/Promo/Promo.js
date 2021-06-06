import "../../index.css";
import practicum from "../../images/practicum.svg";

function Promo(props) {
  return (
    <section className="promo">
      <div className="promo__info">
        <img
          className="promo__illustration"
          src={practicum}
          alt="Картинка Практикум"
        />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}

export default Promo;

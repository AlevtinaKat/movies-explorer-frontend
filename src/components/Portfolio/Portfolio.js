import "../../index.css";
import arrow from "../../images/arrow.svg";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <p class="portfolio__info">Портфолио</p>
      <nav>
        <ul className="portfolio__links">
          <li>
            <a className="link portfolio__link line" href="https://github.com/AlevtinaKat/how-to-learn">
              Статичный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </a>
          </li>
          <li>
            <a className="link portfolio__link line" href="https://alevtinakat.github.io/russian-travel/">
              Адаптивный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </a>
          </li>
          <li>
            <a className="link portfolio__link" href="https://github.com/AlevtinaKat/mesto">
              Одностраничное приложение
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;

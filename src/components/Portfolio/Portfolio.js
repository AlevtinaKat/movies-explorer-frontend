import "../../index.css";
import arrow from "../../images/arrow.svg";
import { Link } from "react-router-dom";

function Portfolio(props) {
  return (
    <section className="portfolio">
      <p class="portfolio__info">Портфолио</p>
      <nav>
        <ul className="portfolio__links">
          <li>
            <Link className="link portfolio__link line" href="#">
              Статичный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </Link>
          </li>
          <li>
            <Link className="link portfolio__link line" href="#">
              Адаптивный сайт
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </Link>
          </li>
          <li>
            <Link className="link portfolio__link" href="#">
              Одностраничное приложение
              <img
                className="portfolio__arrow"
                src={arrow}
                alt="Стрелка"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Portfolio;

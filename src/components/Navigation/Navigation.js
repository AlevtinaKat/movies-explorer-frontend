import "../../index.css";
import account from "../../images/account.svg";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <input id="navigation__toggle" type="checkbox" />
      <label className="navigation__btn" htmlFor="navigation__toggle">
        <span></span>
      </label>

      <ul className="navigationbox">
        <li>
          <Link className="navigation__item" to="/">
            Главная
          </Link>
        </li>
        <li>
          <Link className="navigation__item" to="/movies">
            Фильмы
          </Link>
        </li>
        <li>
          <Link className="navigation__item" to="/saved-movies">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="place">
          <Link to="/profile">
            <button className="header__account">
              <img className="header__iconka" src={account} alt="Иконка" />
              Аккаунт
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;

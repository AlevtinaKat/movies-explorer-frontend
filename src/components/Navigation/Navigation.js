import "../../index.css";
import account from "../../images/account.svg";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <input id="navigation__toggle" type="checkbox" />
      <label className="navigation__btn" for="navigation__toggle">
        <span></span>
      </label>

      <ul className="navigationbox">
        <li>
          <Link className="navigation__item" href="#">
            Главная
          </Link>
        </li>
        <li>
          <Link className="navigation__item" href="#">
            Фильмы
          </Link>
        </li>
        <li>
          <Link className="navigation__item" href="#">
            Сохраненные фильмы
          </Link>
        </li>
        <li className="place">
        <button className="header__account">
          <img className="header__iconka" src={account} alt="Иконка" />
          Аккаунт
        </button>
        </li>
      </ul>

      
    </div>
  );
}

export default Navigation;

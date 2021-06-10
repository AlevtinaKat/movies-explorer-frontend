import logo from "../../images/logo.svg";
import account from "../../images/account.svg";
import "../../index.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const headerClassName = `header ${props.movies ? "" : "header__background"}`;
  const renderLinks = () => {
    if (props.isLoggedIn) {
      return (
        <div className="header__menu">
          <div className="header__movies">
            <Link to="/movies" className="link header__link hide">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="link header__link hide">
              Сохраненные фильмы
            </Link>
          </div>
          <Link to="/profile">
            <button className="header__account header__account-hide">
              <img className="header__iconka" src={account} alt="Иконка" />
              Аккаунт
            </button>
          </Link>
          <Navigation />
        </div>
      );
    } else {
      return (
        <div className="header__menu">
          <Link to="/signup" className="link header__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="header__button">Войти</button>
          </Link>
        </div>
      );
    }
  };

  return (
    <header className={headerClassName}>
      <img src={logo} className="header__logo" alt="Логотип" />
      {renderLinks()}
    </header>
  );
}

export default Header;

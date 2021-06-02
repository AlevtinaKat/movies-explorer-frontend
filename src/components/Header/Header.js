import logo from "../../images/logo.svg";
import account from "../../images/account.svg";
import "../../index.css";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const renderLinks = () => {
    if (props.movies) {
      return (
        <div className="header__menu">
          <div className="header__movies">
            <Link href="#" class="link header__link hide">
              Фильмы
            </Link>
            <Link href="#" class="link header__link hide">
              Сохраненные фильмы
            </Link>
          </div>
          <button className="header__account header__account-hide">
            <img className="header__iconka" src={account} alt="Иконка" />
            Аккаунт
          </button>
          <Navigation />
        </div>
      );
    } else {
      return (
        <div className="header__menu">
          <Link to="#" className="link header__link">
            Регистрация
          </Link>
          <button class="header__button">Войти</button>
        </div>
      );
    }
  };

  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="Логотип" />
      {renderLinks()}
    </header>
  );
}

export default Header;

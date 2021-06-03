import "../../index.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

function Register(props) {
  return (
    <body className="page">
      <div className="page__container">
        <main>
          <section className="register">
            <img src={logo} alt="Логотип" />
            <h3 className="register__title">Добро пожаловать!</h3>
            <form className="register__form" name="register_form">
              <label for="name">
                <p className="register__text">Имя</p>
                <input
                  class="input line"
                  id="name"
                  name="name"
                  required="required"
                  minLength="2"
                  maxLength="30"
                />
                <span id="name-error" className="error"></span>
              </label>

              <label for="email">
                <p className="register__text">E-mail</p>
                <input
                  class="input line"
                  id="email"
                  name="email"
                  required="required"
                  minLength="8"
                />
                <span id="email-error" className="error"></span>
              </label>

              <label for="password">
                <p className="register__text">Пароль</p>
                <input
                  class="input line"
                  id="password"
                  name="password"
                  required="required"
                  minLength="2"
                  maxLength="30"
                />
                <span id="password-error" className="error"></span>
              </label>

              <button href="#" className="register__button">
                Зарегистрироваться
              </button>
            </form>
            <p className="register__auth">Уже зарегистрированы?
              <Link href="#" className="register__link link">
                Войти
              </Link>
            </p>
          </section>
        </main>
      </div>
    </body>
  );
}

export default Register;

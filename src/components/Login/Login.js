import "../../index.css";
import logo from "../../images/logo.svg";
import { Link, withRouter } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Login(props) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  function signin(e) {
    e.preventDefault();
    props.onSubmit(values["password"], values["email"]);
    resetForm();
  }

  return (
    <body className="page">
      <div className="page__container">
        <main>
          <section className="register">
            <img src={logo} alt="Логотип" />
            <h3 className="register__title">Рады видеть!</h3>
            <form className="register__form" name="register_form" onSubmit={signin}>
              <label for="email">
                <p className="register__text">E-mail</p>
                <input
                  class="input line"
                  id="email"
                  name="email"
                  required="required"
                  minLength="8"
                  value={values["email"] || ''}
                  onChange={handleChange}
                />
                <span id="email-error" className="error">{errors["email"]}</span>
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
                  value={values["password"] || ''}
                  onChange={handleChange}
                  type="password"
                />
                <span id="password-error" className="error">{errors["password"]}</span>
              </label>

              <button className="register__button" type="submit" disabled={!isValid}>
                Войти
              </button>
            </form>
            <p className="register__auth">
              Ещё не зарегистрированы?
              <Link to="/signup" className="register__link link">
                Регистрация
              </Link>
            </p>
          </section>
        </main>
      </div>
    </body>
  );
}

export default withRouter(Login);

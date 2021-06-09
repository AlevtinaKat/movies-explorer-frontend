import "../../index.css";
import logo from "../../images/logo.svg";
import { Link, withRouter } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation";

function Register(props) {
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  function signup(e) {
    e.preventDefault();
    props.onSubmit(values["name"], values["password"], values["email"]);
    resetForm();
  }

  return (
    <body className="page">
      <div className="page__container">
        <main>
          <section className="register">
            <img src={logo} alt="Логотип" />
            <h3 className="register__title">Добро пожаловать!</h3>
            <form className="register__form" name="register_form" onSubmit={signup}>
              <label for="name">
                <p className="register__text">Имя</p>
                <input
                  class="input line"
                  id="name"
                  name="name"
                  required="required"
                  minLength="2"
                  maxLength="30"
                  value={values["name"] || ''}
                  onChange={handleChange}
                />
                <span id="name-error" className="error">{errors["name"]}</span>
              </label>

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
                Зарегистрироваться
              </button>
            </form>
            <p className="register__auth">Уже зарегистрированы?
              <Link to="/signin" className="register__link link">
                Войти
              </Link>
            </p>
          </section>
        </main>
      </div>
    </body>
  );
}

export default withRouter(Register);

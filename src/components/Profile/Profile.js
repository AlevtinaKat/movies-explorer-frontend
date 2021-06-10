import "../../index.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import useFormWithValidation from "../../utils/useFormWithValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isUpdated, setIsUpdated] = useState(false);

  const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});

  function update(e) {
    e.preventDefault();
    props
      .onSubmit(values["name"], values["email"])
      .then(() => setIsUpdated(true));
  }

  function back(e) {
    e.preventDefault();
    setIsUpdated(false);
  }

  useEffect(() => {
    resetForm(currentUser);
  }, [currentUser]);

  const render = () => {
    if (!isUpdated) {
      return (
        <section className="profile">
          <h3 className="profile__title">Привет, {currentUser.name}!</h3>
          <form className="profile__form" name="profile_form" onSubmit={update}>
            <label for="name">
              <input
                class="input line"
                id="name"
                name="name"
                placeholder="Имя"
                required="required"
                minLength="2"
                maxLength="30"
                value={values["name"] || ""}
                onChange={handleChange}
              />
              <span id="name-error" className="error">
                {errors["name"]}
              </span>
            </label>

            <label for="email">
              <input
                className="input portfolio__border-none"
                id="email"
                name="email"
                placeholder="Email"
                required="required"
                type="email"
                minLength="8"
                value={values["email"] || ""}
                onChange={handleChange}
              />
              <span id="email-error" className="error">
                {errors["email"]}
              </span>
            </label>

            <button
              type="submit"
              className="profile__button"
              disabled={!isValid}
            >
              Редактировать
            </button>
          </form>
          <Link
            className="profile__link profile__color link"
            onClick={props.signOut}
          >
            Выйти из аккаунта
          </Link>
        </section>
      );
    } else {
      return (
        <div className="profile__update">
          <h2 className="profile__update-title">Профиль обновлён</h2>
          <Link onClick={back}>
            <h3 className="link profile__update-link">Назад</h3>
          </Link>
        </div>
      );
    }
  };

  return (
    <body className="page">
      <div className="page__container">
        <Header movies="true" isLoggedIn={props.isLoggedIn} />
        <main>
          {render()}
        </main>
      </div>
    </body>
  );
}

export default withRouter(Profile);

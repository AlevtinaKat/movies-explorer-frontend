import "../../index.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Profile(props) {
  return (
    <body className="page">
      <div className="page__container">
        <Header movies="true" />
        <main>
          <section className="profile">
            <h3 className="profile__title">Привет, Alevtina!</h3>
            <form className="profile__form" name="profile_form">
              <label for="name">
                <input
                  class="input line"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required="required"
                  minLength="2"
                  maxLength="30"
                />
                <span id="name-error" className="error"></span>
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
                />
                <span id="email-error" className="error"></span>
              </label>

              <button href="#" className="profile__button">
                Редактировать
              </button>
            </form>
            <Link href="#" className="profile__link profile__color link">
              Выйти из аккаунта
            </Link>
          </section>
        </main>
      </div>
    </body>
  );
}

export default Profile;

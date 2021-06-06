import "../../index.css";
import foto from "../../images/foto.jpg";
import { Link } from "react-router-dom";

function AboutMe(props) {
  return (
    <section id="about-me__title" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__information">
        <div>
          <p className="about-me__author">Алевтина</p>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__story">
            Я родилась в Кирове, живу сейчас в Риге. Я люблю слушать музыку, а
            ещё увлекаюсь плаванием.
          </p>
          <nav>
            <ul className="about-me__links">
              <li>
                <a className="link about-me__link" href="https://www.facebook.com/">
                  Facebook
                </a>
              </li>
              <li>
                <a className="link about-me__link" href="https://github.com/">
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <img className="about-me__foto" src={foto} alt="Фото разработчика" />
      </div>
    </section>
  );
}

export default AboutMe;

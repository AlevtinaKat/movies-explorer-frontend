import "../../index.css";

function Footer(props) {
  return (
    <footer className="footer">
      <h4 className="footer__heading">Учебный проект Яндекс.Практикум х BeatFilm.</h4>
      <div className="footer__content">
        <p className="footer__date footer__text">&copy; 2021</p>
        <nav>
          <ul className="footer__links">
            <li className="footer__text">
              <a className="link footer__link" href="https://praktikum.yandex.ru/">Яндекс.Практикум</a>
            </li>
            <li className="footer__text">
              <a className="link footer__link" href="https://github.com/">Github</a>
            </li>
            <li className="footer__text">
              <a className="link footer__link" href="https://www.facebook.com/">Facebook</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
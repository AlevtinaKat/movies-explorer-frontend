import "../../index.css";

function NavTab(props) {
  return (
    <section className="navtab">
      <nav>
        <ul className="navtab__links">
          <li>
            <a className="link navtab__link" href="#aboutProject">
              О проекте
            </a>
          </li>
          <li>
            <a className="link navtab__link" href="#techs__info">
              Технологии
            </a>
          </li>
          <li>
            <a className="link navtab__link" href="#about-me__title">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;

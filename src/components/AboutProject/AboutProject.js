import "../../index.css";

function AboutProject(props) {
  return (
    <section id="aboutProject" className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__text">
        <div>
          <h3 className="about-project__text-title">Дипломный проект включая 5 этапов</h3>
          <p className="about-project__text-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div>
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__time">
        <h3 className="about-project__time-title about-project__time-title_green">1 неделя</h3>
        <h3 className="about-project__time-title about-project__time-title_grey">4 недели</h3>
        <p className="about-project__time-subtitle">Back-end</p>
        <p className="about-project__time-subtitle">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;

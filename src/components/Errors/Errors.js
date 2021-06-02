import "../../index.css";

function Errors(props) {
  return (
    <body className="page">
      <div className="page__container">
        <div className="errors">
          <h1 className="errors__text">404</h1>
          <h2 className="errors__notFound">Страница не найдена</h2>
          <h3 className="errors__find">Найти</h3>
        </div>
      </div>
    </body>
  );
}

export default Errors;

import "../../index.css";
import { Link } from "react-router-dom";

function Errors(props) {
  return (
    <body className="page">
      <div className="page__container">
        <div className="errors">
          <h1 className="errors__text">404</h1>
          <h2 className="errors__notFound">Страница не найдена</h2>
          <Link to="/">
            <h3 className="link errors__find">Назад</h3>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Errors;

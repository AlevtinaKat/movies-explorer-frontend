import "../../index.css";

function SearchForm(props) {
  return (
    <section className="search">
      <form className="search__form">
        <input className="search__input" type="text" />
        <button className="search__button">Найти</button>
      </form>
      <div className="search__switch">
        <label className="search__label">
          <input type="checkbox" />
          <span className="search__slider round"></span>
        </label>
        <p className="search__text">Короткометражки</p>
      </div>
      <p className="search__underline"></p>
    </section>
  );
}

export default SearchForm;

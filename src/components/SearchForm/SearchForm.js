import "../../index.css";
import { useState } from "react";

function SearchForm(props) {
  const [search, setSearch] = useState("");
  const [shortfilm, setShortfilm] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleShortfilmChange(e) {
    setIsCheck(e.target.checked);
    setShortfilm(e.target.checked);
    props.onSubmit({search, shortfilm: e.target.checked, saved: props.saved});
  }

  function searchForm(e) {
    e.preventDefault();
    props.onSubmit({search, shortfilm, saved: props.saved});
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={searchForm}>
        <input
          className="search__input"
          required="required"
          type="text"
          placeholder="Фильм"
          onChange={handleSearchChange}
        />
        <button className="search__button">Найти</button>
        <div className="search__switch">
          <label className="search__label">
            <input type="checkbox" checked={isCheck} onChange={handleShortfilmChange} />
            <span className="search__slider round"></span>
          </label>
          <p className="search__text">Короткометражки</p>
        </div>
      </form>
      <p className="search__underline"></p>
    </section>
  );
}

export default SearchForm;

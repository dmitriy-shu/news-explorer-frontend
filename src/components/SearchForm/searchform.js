import React from 'react';

function SearchForm({ onSubmit }) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <input
        required
        name="search"
        type="text"
        className="search__input "
        autoComplete="off"
        placeholder="Введите запрос"></input>
      <button
        type="submit"
        className="search__button ">
        Искать
        </button>
    </form>
  );
}
export default SearchForm;
import React from 'react';

function SearchForm({ onSubmit }) {
  const [keyWord, setKeyWord] = React.useState('');

  const handleInput = ((evt) => {
    setKeyWord(evt.target.value);
  })
  const handleSubmit = ((evt) => {
    onSubmit(evt, keyWord);
  })

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        required
        name="search"
        type="text"
        className="search__input "
        autoComplete="off"
        onInput={handleInput}
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
import React from 'react';
import tempArticles from '../../constants/tempArticles.js';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';

function SavedNewsHeader({ isLoggedIn, isTypeSavedCards }) {
  const user = React.useContext(CurrentUserContext);
  // создаем из массива карточек массив ключевых слов и сортируем
  const arrayOfKeywords = tempArticles.map((item) => item.keyword).sort();
  // создаем из массива ключевых слов массив с объектами вида{keyword: слово, number: 5}
  let num;
  let current = 0;
  const arrayOfObjKeywords = arrayOfKeywords.reduce((pv, item, idx, arr) => {
    if (item !== arrayOfKeywords[idx - 1]) {
      current = current + 1;
      num = 1;
      pv.push({ keyword: item, number: num });
    } else {
      num = num + 1;
      pv[current - 1].number = num;
    };
    return pv;
  }, []);
  // посчитаем, сколько всего разных ключевых слов
  const numberOfKeywords = arrayOfObjKeywords.length;
  // сортируем массив по убыванию количества ключевых слов (number)
  arrayOfObjKeywords.sort(function (a, b) {
    if (a.number > b.number) {
      return -1;
    }
    if (a.number < b.number) {
      return 1;
    }
    return 0;
  });
  console.log(arrayOfObjKeywords);
  // конструируем фразу в зависимости от количества ключевых слов
  let phraseStart = '';
  let phraseSpan = '';
  switch (true) {
    case (numberOfKeywords === 1):
      phraseStart = 'По ключевому слову: ';
      phraseSpan = ` ${arrayOfObjKeywords[0].keyword}`;
      break;
    case (numberOfKeywords === 2):
      phraseStart = 'По ключевым словам: ';
      phraseSpan = `${arrayOfObjKeywords[0].keyword} и  ${arrayOfObjKeywords[1].keyword}`;
      break;
    case (numberOfKeywords > 2):
      phraseStart = 'По ключевым словам: ';
      phraseSpan = `${arrayOfObjKeywords[0].keyword}, ${arrayOfObjKeywords[1].keyword} и ${numberOfKeywords - 2}-м другим`;
      break;


    default:
      phraseStart = '';
      phraseSpan = '';
  }


  // const [numberOfCards, setNumberOfCards] = React.useState(3);

  // const increaseNumberOfCards = () => {
  //   setNumberOfCards(Math.min(numberOfCards + 3, tempArticles.length));
  // }
  // const arrayToShow = tempArticles.slice(0, numberOfCards);

  // const classNameListButton =
  //   `list__button ${arrayToShow.length === tempArticles.length && 'list__button_invisible'} `;

  return (
    <div className="sn-header">
      <h2 className="sn-header__title">Сохраненные статьи</h2>
      <p className="sn-header__info">{user.name}, у Вас {arrayOfKeywords.length}<br /> сохраненных статей </p>
      <p className="sn-header__subtitle">{phraseStart}<span className="sn-header__span">{phraseSpan}</span></p>
    </div>
  );
}
export default SavedNewsHeader;
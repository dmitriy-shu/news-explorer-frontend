import React from 'react';
import NewsCard from '../NewsCard/newsCard.js';
import { NUMBER_OF_ARTICLES_IN_PACKAGE } from '../../constants/listConst.js';

function NewsCardList({ isLoggedIn, isTypeSavedCards, cards, onButtonPress }) {
  const [numberOfCards, setNumberOfCards] = React.useState(NUMBER_OF_ARTICLES_IN_PACKAGE);
  const increaseNumberOfCards = () => {
    setNumberOfCards(Math.min(numberOfCards + NUMBER_OF_ARTICLES_IN_PACKAGE, cards.length));
  }

  React.useEffect(() => {
    isTypeSavedCards ? setNumberOfCards(cards.length) : setNumberOfCards(NUMBER_OF_ARTICLES_IN_PACKAGE);
  }, [cards, isTypeSavedCards])
  const arrayToShow = cards.slice(0, numberOfCards);

  const classNameListButton =
    `list__button ${arrayToShow.length === cards.length && 'list__button_invisible'}`;

  return (
    <div className="list content">
      {!isTypeSavedCards && <h2 className="list__title">Результаты поиска</h2>}
      <ul className="list__cards">
        {arrayToShow.map((item) =>
          <NewsCard
            key={item._id}
            card={item}
            isLoggedIn={isLoggedIn}
            isTypeSavedCards={isTypeSavedCards}
            onButtonPress={onButtonPress}
          />
        )}

      </ul>
      <button className={classNameListButton} onClick={increaseNumberOfCards}>Показать еще</button>

    </div>

  );
}
export default NewsCardList;
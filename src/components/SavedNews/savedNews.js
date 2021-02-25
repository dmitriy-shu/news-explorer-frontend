import React from 'react';
import Header from '../Header/header.js';
import SavedNewsHeader from '../SavedNewsHeader/savedNewsHeader.js';
import NewsCardList from '../NewsCardList/newsCardList.js';

function SavedNews({ screenWidth, isLoggedIn, handleLogout, cards, onButtonPress }) {

  return (
    <div>
      <Header screenWidth={screenWidth} isLoggedIn={true} isBlackText={true} handleClick={handleLogout} />
      <SavedNewsHeader cardsArray={cards} />
      <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={true} cards={cards} onButtonPress={onButtonPress} />
    </div>
  );
}
export default SavedNews;

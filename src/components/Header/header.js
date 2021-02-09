import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Navigation from '../Navigation/navigation.js';
import logoutPath from '../../images/logout.svg';
import logoutWhitePath from '../../images/logout-white.svg';
import mobMenuPath from '../../images/mob_menu.svg';
import mobClosePath from '../../images/mob_close.svg';
import mobMenuBlackPath from '../../images/mob_menu_black.svg';

function Header({ screenWidth, isLoggedIn, isBlackText, handleClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isCompact, setIsCompact] = React.useState(true);
  const darkTextColor = isBlackText ? { color: 'black', backgroundColor: 'white' } : {};
  const greyBackgroundAndOpened = isCompact ? {} : { height: 'auto', backgroundColor: '#1a1b22', color: 'white' };



  function handleMenuToggle() {
    setIsCompact(!isCompact);
  }
  function resetMenu() {
    setIsCompact(true);
  }
  if (screenWidth > 700) {
    // header для широких экранов
    return (
      <header className="header" style={darkTextColor}>
        <div className="header__top content">
          <p className="header__title">NewsExplorer </p>
          <div className="header__manage-box">
            <Navigation isLoggedIn={isLoggedIn} />
            {isLoggedIn ?
              <button className="header__button" onClick={handleClick}>
                {currentUser.name}
                <span>&nbsp;</span>
                <img src={isBlackText ? logoutPath : logoutWhitePath} alt="выйти" />
              </button>
              :
              <button className="header__button" onClick={handleClick}>Авторизоваться</button>
            }

          </div>
        </div>
      </header>
    );
  } else {
    // header для узких экранов
    return (
      <header className="header" style={Object.assign(darkTextColor, greyBackgroundAndOpened)}>
        {!isCompact && <div className="header__overlay"></div>}
        <div className="header__top content">
          <p className="header__title">NewsExplorer </p>
          <button
            className="header__menu"
            onClick={handleMenuToggle}>
            <img src={isCompact ?
              (isBlackText ? mobMenuBlackPath : mobMenuPath) :
              mobClosePath} alt="меню" />
          </button>
        </div>
        {!isCompact &&
          (<div className="header__manage-box content">
            <Navigation isLoggedIn={isLoggedIn} onClick={resetMenu} />
            {isLoggedIn ?
              <button className="header__button" onClick={handleClick}>
                {currentUser.name}
                <span>&nbsp;</span>
                <img src={!isBlackText || !isCompact ? logoutWhitePath : logoutPath} alt="выйти" />
              </button>
              :
              <button className="header__button" onClick={handleClick}>Авторизоваться</button>
            }

          </div>)}
      </header>
    )
  }
}
export default Header;
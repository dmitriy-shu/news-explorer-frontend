import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
import Register from '../Register/register.js';
import Login from '../Login/login.js';
import PopupInfo from '../PopupInfo/popupInfo.js';
import SavedNews from '../SavedNews/savedNews.js';
import NotFoundBox from '../NotFoundBox/notFoundBox.js';
import Preloader from '../Preloader/preloader.js';
import ProtectedRoute from '../ProtectedRoute/protectedRoute.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Грета', email: 'greta@yandex.ru' });
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(1440);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [isSomethingFound, setIsSomethingFound] = React.useState(true);
  const [hasUserPressedSearchOnce, setHasUserPressedSearchOnce] = React.useState(false);
  const [errorText, setErrorText] = React.useState('Это текст ошибки с сервера');

  document.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      closeAllPopups();
    }
  })
  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    })
  }, []);


  function handleSubmitSearch(evt) {
    evt.preventDefault();
    setShowPreloader(true);
    setTimeout(() => {
      setIsSomethingFound(Math.random() > .5);
      setHasUserPressedSearchOnce(true);
      setShowPreloader(false);
    }, 1000)

  }

  function openRegisterPopup() {
    setShowRegister(true);
  }

  function openLoginPopup() {
    setShowLogin(true);
  }
  function closeAllPopups() {
    setShowLogin(false);
    setShowRegister(false);
    setShowInfo(false);
  }

  function redirectToLogin() {
    closeAllPopups();
    openLoginPopup();
  }

  function redirectToRegister() {
    closeAllPopups();
    openRegisterPopup();
  }

  function handleRegister(evt) {
    evt.preventDefault();
    // логика регистрации пользователя
    let rand = Math.floor(Math.random() * 10);
    if (rand > 5) {
      closeAllPopups();
      setShowInfo(true);
    } else {
      setErrorText('Регистр. если случ.число  =' + rand + '=  окажется больше 5');
    }
  }

  function handleLogin(evt) {
    evt.preventDefault();
    // логика авторизации
    setCurrentUser(Math.random() > .5 ? { name: 'Саша' } : { name: 'Таня' });
    console.log('ki-Login');
    closeAllPopups();
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // логика выхода 
    console.log('ki-Logout');
    setIsLoggedIn(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Route exact path="/">
          <Header
            screenWidth={screenWidth}
            isLoggedIn={isLoggedIn}
            isBlackText={false}
            handleClick={isLoggedIn ? handleLogout : openLoginPopup} />
          <Main onSubmit={handleSubmitSearch} />
          {hasUserPressedSearchOnce &&
            (isSomethingFound ?
              <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} /> :
              <NotFoundBox />
            )
          }

          <About />
        </Route>
        <ProtectedRoute path="/saved-news"
          screenWidth={screenWidth}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          component={SavedNews}
        />
        <Footer screenWidth={screenWidth} />
        {showPreloader && <Preloader />}
        <Register
          isOpen={showRegister}
          onClose={closeAllPopups}
          onSubmit={handleRegister}
          onRedirect={redirectToLogin}
          errorText={errorText} />
        <Login
          isOpen={showLogin}
          onClose={closeAllPopups}
          onSubmit={handleLogin}
          onRedirect={redirectToRegister}
          errorText={errorText} />
        <PopupInfo
          isOpen={showInfo}
          onClose={closeAllPopups}
          title='Пользователь успешно зарегистрирован.'
          redirectText='Войти'
          onRedirect={redirectToLogin} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import githubPath from '../../images/github.svg';
import fbPath from '../../images/fb.svg';

function Footer({ screenWidth }) {
  if (screenWidth > 700) {
    // footer for wide screens
    return (
      <footer className="footer content" >
        <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
        <div className="footer__link-container">
          <Link to="/" className="footer__link">Главная</Link>
          <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com" className="footer__icon"><img src={githubPath} alt="логотип Гитхаба" /></a>
          <a href="https://fb.com" className="footer__icon"><img src={fbPath} alt="логотип Фейсбук" /></a>
        </div>
      </footer>
    );
  } else {
    // footer for narrow screens
    return (
      <footer className="footer content" >
        <div className="footer__link-container">
          <Link to="/" className="footer__link">Главная</Link>
          <div>
            <a
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__icon">
              <img src={githubPath} alt="логотип Гитхаба" />
            </a>
            <a
              href="https://fb.com"
              rel="noopener noreferrer"
              target="_blank"
              className="footer__icon">
              <img src={fbPath} alt="логотип Фейсбук" />
            </a>
          </div>
        </div>
        <a
          href="https://praktikum.yandex.ru"
          rel="noopener noreferrer"
          target="_blank"
          className="footer__link">
          Яндекс.Практикум
          </a>
        <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      </footer>
    );
  }
}
export default Footer;
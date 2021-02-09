import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation({ isLoggedIn, onClick }) {
  return (
    <nav className="navigation" onClick={onClick} >
      <NavLink
        exact to="/"
        activeClassName="navigation__link_active"
        className="navigation__link">
        Главная
      </NavLink>
      {isLoggedIn &&
        <NavLink
          exact to="/saved-news"
          activeClassName="navigation__link_active"
          className="navigation__link">
          Сохраненные статьи
      </NavLink>
      }
    </nav >
  );
}
export default Navigation;
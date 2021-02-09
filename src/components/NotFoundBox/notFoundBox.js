import React from 'react';
import notFoundPath from '../../images/not-found_v1.svg';

function NotFoundBox() {

  return (
    <div className="box">
      <img className="box__picture" src={notFoundPath} alt="Грустная лупа" />
      <p className="box__text">Ничего не найдено</p>
      <p className="box__info">К сожалению, по Вашему запросу<br /> ничего не найдено.</p>
    </div>
  );
}
export default NotFoundBox;
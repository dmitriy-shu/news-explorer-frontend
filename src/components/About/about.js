import React from 'react';
import authorPath from '../../images/myphoto.JPG';

function About() {
  return (
    <div className="about content" >
      <img src={authorPath} className="about__avatar" alt="фото автора проекта" />
      <div className="about__info-block">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">Это блок с описанием автора проекта. Здесь следует указать, как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете</p>
        <p className="about__text">Также можно рассказать о процессе обучения в Практикуме, чему вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
      </div>
    </div>
  );
}
export default About;
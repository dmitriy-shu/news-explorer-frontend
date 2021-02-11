import React from 'react';
import closeButtonPath from '../../images/close.svg';

function PopupInfo({ title, redirectText, isOpen, onClose, onRedirect }) {
  const classNameForm = `popup ${isOpen && 'popup_opened'}`;



  return (
    <div className={classNameForm}>
      <div className='popup__overlay' onClick={onClose}></div>
      <div className="popup__container">
        <p className="popup__text popup__text_type_info">{title}</p>
        <p className="popup__redirect-message popup__redirect-message_type_info" >
          <button
            className="popup__redirect-button popup__redirect-button_type_info"
            onClick={onRedirect}>
            {redirectText}
          </button>
        </p>
        <button
          type="reset"
          className="popup__close-button"
          onClick={onClose}>
          <img src={closeButtonPath} alt="закрыть" />
        </button>
      </div>
    </div >
  );
}
export default PopupInfo;
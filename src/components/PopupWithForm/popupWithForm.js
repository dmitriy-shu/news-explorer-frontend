import React from 'react';
import closeButtonPath from '../../images/close.svg';

function PopupWithForm({
  title,
  name,
  submitText,
  redirectText,
  onRedirect,
  isOpen,
  onClose,
  onSubmit,
  errorText,
  isValid,
  children }) {
  const classNameForm = `popup ${isOpen && 'popup_opened'}`;
  const classNameSubmitButton = `popup__save-button ${isValid && 'popup__save-button_active'}`;


  return (
    <div className={classNameForm}>
      <div className='popup__overlay' onClick={onClose}></div>
      <form
        name={name}
        onSubmit={onSubmit}
        className="popup__container"
        noValidate>
        <p className="popup__text">{title}</p>
        {children}
        <p className="popup__error popup__error_type_server">{errorText}</p>
        <button
          type="submit"
          className={classNameSubmitButton}>
          {submitText}
        </button>
        <p className="popup__redirect-message">
          или <button type="reset" className="popup__redirect-button" onClick={onRedirect}>{redirectText}</button>
        </p>
        <button
          type="reset"
          className="popup__close-button"
          onClick={onClose}>
          <img src={closeButtonPath} alt="закрыть" />
        </button>
      </form>
    </div >
  );
}
export default PopupWithForm;
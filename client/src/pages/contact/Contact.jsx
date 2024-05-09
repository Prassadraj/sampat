import React, { useState } from 'react';
import './contact.css'

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    setMessageSent(true);
    // Add logic to handle form submission here (e.g., send data to backend)
  };

  const handleInputFocus = (e) => {
    e.target.parentNode.classList.add('active');
  };

  const handleInputBlur = (e) => {
    const { value } = e.target;
    if (value === '') {
      e.target.parentNode.classList.remove('active');
    } else {
      e.target.parentNode.classList.add('active');
    }
  };

  return (
    <div className="center">
      <div className="container">
        <h1 className="title">Contact first ☝️</h1>

        <div className="form form__1">
          <label htmlFor="name" className="form__label">
            Full name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder=""
            id="name"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div className="form form__2">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input
            type="email"
            className="form__input"
            placeholder=""
            id="email"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <div className="form form__3">
          <label htmlFor="message" className="form__label">
            Your message
          </label>
          <input
            type="text"
            className="form__input"
            placeholder=""
            id="message"
            required
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </div>

        <button className="form__btn" onClick={handleSubmit}>
          <span className={`form__btn--visible ${messageSent ? 'invisible' : ''}`}>
            <p>Submit</p>
            <i className="material-icons">arrow_forward</i>
          </span>
          <span className={`form__btn--invisible ${messageSent ? 'visible' : ''}`}>
            Message sent!
          </span>
        </button>

        <div className="container-mail">
          <div className="mail">
            <div className="mail__back"></div>
            <div className="mail__top"></div>
            <div className="mail__letter">
              <div className="mail__letter-square"></div>
              <div className="mail__letter-lines"></div>
            </div>
            <div className="mail__left"></div>
            <div className="mail__right"></div>
            <div className="mail__bottom"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

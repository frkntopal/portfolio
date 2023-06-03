import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from "emailjs-com";
import './contact.styles.scss';


import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t} = useTranslation()
  
  const initialState = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    message: ''
  }
  
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async (event) => {
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE,
        formData,
        import.meta.env.VITE_APP_EMAILJS_PUBLICKEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            t("We will get back to you as soon as possible.")
          );
          setFormData(initialState);
        },
        (error) => {
          console.log(error.text);
          alert(
            t("An error occurred, please try again later.")
          );
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <FaWhatsapp size={100} />
        <div className="contact-details">
          <span className="phone-number">0553 879 29 57</span>
        </div>
      </div>
      <div className="contact-form">
      <h1 className="contact-title">{t('Contact')}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t('Name')}:</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(event) =>
            setFormData({ ...formData, name: event.target.value })
          }
          required
        />

        <label htmlFor="surname">{t('Surname')}:</label>
        <input
          type="text"
          id="surname"
          value={formData.surname}
          onChange={(event) =>
            setFormData({ ...formData, surname: event.target.value })
          }
          required
        />

        <label htmlFor="phone">{t('Phone')}:</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
          required
        />
        <label htmlFor="email">{t('Email')}:</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
          required
        />
          <label htmlFor="message">{t('Message')}:</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(event) =>
              setFormData({ ...formData, message: event.target.value })
            }
            required
          ></textarea>

          <button type="submit">{t('Send')}</button>
      </form>

      </div>
    </div>
  );
};

export default Contact;

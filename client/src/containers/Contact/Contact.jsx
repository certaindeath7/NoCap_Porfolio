import React, { useState } from 'react';
import { images } from '../../constants';
import { Wrap, Motion } from '../../wrapper';
import { client } from '../../client';
import useForm from './useForm';
import validateHelper from './validateHelper';
import './Contact.scss';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validateHelper);
  const { name, email, subject, message } = values;

  function submit() {
    setLoading(true);

    const newContact = {
      _type: 'contact',
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };
    try {
      client.create(newContact).then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2 className="head-text">
        Let's have a chat if you are <span>interested</span>
      </h2>
      <div className="app__contact-coms">
        <div className="app__contact-com">
          <img src={images.email} alt="email" />
          <a href="mailto:ducnguyentranphuc98@gmail.com" className="p-text">
            ducnguyentranphuc98@gmail.com
          </a>
        </div>
        <div className="app__contact-com">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:(+61) 423403970" className="p-text">
            (+61) 423403970
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__contact-form app__flex">
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              required
              value={name || ''}
              onChange={handleChange}
            />
            {errors.name && <p className="danger">{errors.name}</p>}
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            {errors.email && <p className="danger">{errors.email}</p>}
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Subject"
              name="subject"
              value={subject}
              onChange={handleChange}
            />
            {errors.subject && <p className="danger">{errors.subject}</p>}
          </div>
          <div className="app__flex">
            <textarea
              className="p-text"
              type="text"
              placeholder="Message"
              name="message"
              value={message}
              onChange={handleChange}
            />
            {errors.message && <p className="danger">{errors.message}</p>}
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};
export default Wrap(Motion(Contact, 'app__contact'), 'contact', 'app__primarybg');

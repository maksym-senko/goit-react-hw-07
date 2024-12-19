import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import style from './ContactForm.module.css';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addContact({ name, phone }));
      setName('');
      setPhone('');
    };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <input
        className={style.inputText}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        className={style.inputText}
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Number"
        required
      />
      <button type="submit" className={style.btnAddContact}>Add Contact</button>
    </form>
  );
};


export default ContactForm;
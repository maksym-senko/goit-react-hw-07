import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { selectFilteredContacts } from '../../redux/selectors';
import style from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

  return (
        <ul className={style.contactList}>
            {contacts.map(({ id, name, number }) => (
            <li className={style.contactItem} key={id}>
            {name}: <br /> {number}
            <button className={style.btnDelete} onClick={() => dispatch(deleteContact(id))}>Delete</button>
            </li>
            ))}
        </ul>
  );
};

export default ContactList;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts } from './redux/selectors';
import ContactsList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css'

const App = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}
      <ContactsList contacts={items} />
    </div>
  );
};

export default App;

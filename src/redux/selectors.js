import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = (state) => state.contacts;


export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contactsState, filter) =>
    contactsState.items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

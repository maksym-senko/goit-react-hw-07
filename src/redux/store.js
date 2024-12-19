import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { filtersReducer } from './filtersSlice';
import { contactsReducer } from './contactsSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

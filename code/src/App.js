import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { questions } from 'reducers/questions';
import { Questions } from 'components/Questions';

const reducer = combineReducers({
  questions: questions.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <Questions />
    </Provider>
  );
};

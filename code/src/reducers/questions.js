import { createSlice } from '@reduxjs/toolkit';

export const questions = createSlice({
  name: 'questions',
  initialState: {
    username: null,
    gameQuestion: '',
  },

  reducers: {
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setGameQuestion: (store, action) => {
      store.gameQuestion = action.payload;
    },
  },
});

export const generateQuestion = () => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: 'TestPlayer',
    }),
  };

  return (dispatch, getState) => {
    fetch(
      `https://labyrinth-technigo.herokuapp.com/start?username=${
        getState().questions.username
      }`,
      options
    )
      .then((res) => res.json())
      .then((question) =>
        dispatch(questions.actions.setGameQuestion(question))
      );
  };
};
import { SET_LANGUAGE, SET_MESSAGE, SET_LOGGED_IN } from "./actionTypes";

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: { language },
});

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: { message },
});

export const setLoggedIn = (loggedIn) =>({
  type: SET_LOGGED_IN,
  payload: { loggedIn },
});

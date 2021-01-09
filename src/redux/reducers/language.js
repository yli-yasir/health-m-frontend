import { ENGLISH } from "../../constants/langauges";
import { SET_LANGUAGE } from "../actionTypes";

const language = (state = ENGLISH, action) => {
  switch (action.type) {
    case SET_LANGUAGE: {
      return action.payload.language;
    }
    default: {
      return state;
    }
  }
};

export default language;
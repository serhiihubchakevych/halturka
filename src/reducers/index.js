import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import modals from "./modals";
import article from "./article";

const appReducer = combineReducers({
  form: formReducer,
  modals: modals,
  article: article,
});

export default appReducer;

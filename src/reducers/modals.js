import { ARTICLE_MODAL_TOGGLER, ON_HIDE_MODAL_REQUESTED } from "../actions/action-types";

const initState = {
  isVisibleArticleModal: false,
};

const visibilityArticleModalToggler = (state, action) => {
  return {
    ...state,
    isVisibleArticleModal: action.payload,
  };
};

const onHideModalContainerRequested = (state) => {
  return {
    ...state,
    isVisibleArticleModal: false,
  };
};

const modals = (state = initState, action) => {
  switch (action.type) {
    case ARTICLE_MODAL_TOGGLER:
      return visibilityArticleModalToggler(state, action);
    case ON_HIDE_MODAL_REQUESTED:
      return onHideModalContainerRequested(state);
    default:
      return state;
  }
};

export default modals;

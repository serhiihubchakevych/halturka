import { ARTICLE_MODAL_TOGGLER, ON_HIDE_MODAL_REQUESTED } from "./action-types";

const visibilityArticleModalToggler = (modalVisibilityStatus) => {
  return {
    type: ARTICLE_MODAL_TOGGLER,
    payload: modalVisibilityStatus,
  };
};

const onHideModalContainerRequested = () => {
  return {
    type: ON_HIDE_MODAL_REQUESTED,
  };
};

export { visibilityArticleModalToggler, onHideModalContainerRequested };

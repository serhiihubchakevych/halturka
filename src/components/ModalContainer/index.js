import { connect } from "react-redux";

import ModalContainer from "./ModalContainer";

import { onHideModalContainerRequested } from "../../actions/modals";

const mapDispatchToProps = {
  onHideModalContainerRequested,
};

export default connect(null, mapDispatchToProps)(ModalContainer);

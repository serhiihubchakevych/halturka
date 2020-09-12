import { connect } from "react-redux";

import DashboardPage from "./Dashboard";

import { visibilityArticleModalToggler } from "../../actions/modals";

const mapStateToProps = ({ modals: { isVisibleArticleModal } }) => ({
  isVisibleArticleModal,
});

const mapDispatchToProps = {
  visibilityArticleModalToggler,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);

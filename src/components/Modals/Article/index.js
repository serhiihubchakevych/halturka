import { connect } from "react-redux";
import moment from "moment";

import Article from "./Article";

const mapStateToProps = ({ article: { currentOpenArticle } }) => ({
  currentOpenArticle,
  initialValues: {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
  },
});

export default connect(mapStateToProps, null)(Article);

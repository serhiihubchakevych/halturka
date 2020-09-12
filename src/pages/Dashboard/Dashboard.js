import React from "react";

import DataTable from "../../components/DataTable";
import ModalContainer from "../../components/ModalContainer";
import Article from "../../components/Modals/Article";

import "./styles.css";

const DashboardPage = ({ isVisibleArticleModal, visibilityArticleModalToggler }) => {
  const modalVisibilityDistributor = () => {
    if (isVisibleArticleModal) {
      return (
        <ModalContainer>
          <Article visibilityArticleModalToggler={visibilityArticleModalToggler} />
        </ModalContainer>
      );
    }
  };

  return (
    <div>
      {modalVisibilityDistributor()}
      <div className="d-flex alig-items-cente justify-content-between mb-3">
        <h1 className="text-muted font-weight-normal">Dashboard</h1>
        <button className="btn btn-primary btn-lg active" onClick={() => visibilityArticleModalToggler(true)}>
          Add new article
        </button>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default DashboardPage;

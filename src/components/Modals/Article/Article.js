import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";

import { createArticleAPI } from "../../../api/articles";
import articleParamsList from "../../../constant/article-params";

import "./styles.css";

const Article = ({ visibilityArticleModalToggler, handleSubmit }) => {
  const [articleImage, setArticleImage] = useState(null);

  const fileChangedHandler = (event) => {
    const choosedImage = event.target.files[0];
    setArticleImage(choosedImage);
  };

  const submitForm = (values) => {
    createArticleAPI(values);
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add new</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modal-body-container">
        <form onSubmit={handleSubmit(submitForm)} id="article-form">
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="title">
                Title
              </label>
            </div>
            <Field name="title" component="input" type="text" id="title" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-75">
              <div className="col-sm-12 col-form-label d-flex justify-content-between">
                <span className="text-primary font-weight-bold">Upload picture</span> {articleImage && <span className="ml-5">{articleImage.name}</span>}
              </div>
            </div>
            <div className="w-25 bg-primary position-relative">
              <label className="position-absolute text-white y-centered text-center w-100" htmlFor="picture">
                Upload picture
              </label>
              <input name="picture" type="file" id="picture" className="d-none" onChange={(e) => fileChangedHandler(e)} accept="image/*" />
            </div>
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="article">
                Article
              </label>
            </div>
            <Field name="article" rows={10} component="textarea" id="article" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="author">
                Author
              </label>
            </div>
            <Field name="author" component="input" type="text" id="author" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="agency">
                Agency
              </label>
            </div>
            <Field name="agency" component="input" type="text" id="agency" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="date">
                Date
              </label>
            </div>
            <Field name="date" component="input" type="date" id="date" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="time">
                Time
              </label>
            </div>
            <Field name="time" component="input" type="time" id="time" className="w-75 border-0" />
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="level">
                Level
              </label>
            </div>
            <Field name="level" component="select" id="level" className="w-75 border-0">
              {articleParamsList.level.map((levelItem) => {
                return (
                  <option key={levelItem.id} value={levelItem.value}>
                    {levelItem.title}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="type">
                Type
              </label>
            </div>
            <Field name="type" component="select" id="type" className="w-75 border-0">
              {articleParamsList.type.map((typeItem) => {
                return (
                  <option key={typeItem.id} value={typeItem.value}>
                    {typeItem.title}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="category">
                Category
              </label>
            </div>
            <Field name="category" component="select" id="category" className="w-75 border-0">
              {articleParamsList.category.map((categoryItem) => {
                return (
                  <option key={categoryItem.id} value={categoryItem.value}>
                    {categoryItem.title}
                  </option>
                );
              })}
            </Field>
          </div>
          <div className="row m-3 border-3 border-primary rounded">
            <div className="w-25">
              <label className="col-sm-12 col-form-label text-primary font-weight-bold" htmlFor="asset">
                Asset related
              </label>
            </div>
            <Field name="asset" component="input" type="text" id="asset" className="w-75 border-0" />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => visibilityArticleModalToggler(false)}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="article-form">
          Add article
        </Button>
      </Modal.Footer>
    </>
  );
};

export default reduxForm({
  form: "ArticleForm",
})(Article);

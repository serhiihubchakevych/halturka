import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

const LoginForm = ({ handleSubmit, history }) => {
  const submitForm = (values) => {
    console.log(values);
  };

  return (
    <form className="pt-3" onSubmit={handleSubmit(submitForm)}>
      <div className="d-flex mb-3">
        <Field name="login" component="input" type="text" placeholder="Username" className="form-control input_user" />
      </div>
      <div className="d-flex mb-3">
        <Field name="password" component="input" type="password" placeholder="Password" className="form-control input_user" />
      </div>
      <div className="mt-3">
        <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">
          SIGN IN
        </Link>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "LoginForm",
})(LoginForm);

import React from "react";

import LoginForm from "../../components/Login";

const LoginPage = () => {
  return (
    <div className="min-vh-100 vh-100">
      <div className="d-flex align-items-center auth px-0 h-100">
        <div className="row w-100 mx-0 ">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="d-flex align-items-center justify-content-center mb-5">
                <img src={require("../../assets/images/login/logo.png")} alt="logo" />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React from "react";
import moment from "moment";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary h-10">
      <div className="container-fluid">
        <button type="button" id="sidebarCollapse" className="btn btn-secondary">
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="text-light">
            <i className="fas fa-clock mr-3"></i>
            {moment().format("HH:mm")}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

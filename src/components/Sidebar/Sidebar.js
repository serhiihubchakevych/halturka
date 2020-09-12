import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

const Sidebar = () => {
  return (
    <nav id="sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-center">
        <img src={require("../../assets/images/login/logo.png")} alt="logo" />
      </div>

      <div className="mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <img src={require("../../assets/images/dashboard/face19.jpg")} alt="logo" className="img-thumbnail rounded-circle" />
        <p className="text-muted mb-0 mt-3">Jason</p>
        <p className="text-muted">Statham</p>
      </div>
      <div className="list-group list-group-flush">
        <NavLink to="/dashboard" activeClassName="nav-link active-link rounded">
          <div className="p-1 text-muted ml-3 b">
            <i className="fas fa-home mr-3"></i>
            Home
          </div>
        </NavLink>
        <NavLink to="/api-docs" activeClassName="nav-link active-link rounded">
          <div className="p-1 text-muted ml-3">
            <i className="fas fa-globe-europe mr-3"></i>
            API documentation
          </div>
        </NavLink>
        <NavLink to="/settings" activeClassName="nav-link active-link rounded">
          <div className="p-1 text-muted ml-3">
            <i className="fas fa-cogs mr-3"></i>
            Settings
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;

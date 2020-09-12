import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={(props) => <LoginPage {...props} />} />
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
        <React.Fragment>
          <div className="wrapper">
            <Sidebar />
            <div className="content-container">
              <Navbar />
              <div className="content">
                <ProtectedRoute exact path="/dashboard" component={(props) => <DashboardPage {...props} />} />
              </div>
            </div>
          </div>
        </React.Fragment>
      </Switch>
    </Router>
  );
};

export default App;

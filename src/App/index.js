import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LOGIN_PATH } from "../constants/routePaths";
import LoginPage from "../pages/login";
import { connect } from "react-redux";
import GuardedApp from "./GuardedApp";

function App(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={LOGIN_PATH} component={LoginPage} />
          <GuardedApp loggedIn={props.loggedIn} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }))(App);

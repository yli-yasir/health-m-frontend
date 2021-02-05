import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LOGIN_PATH } from "../constants/routePaths";
import LoginPage from "../pages/login";
import GuardedApp from "./GuardedApp";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={LOGIN_PATH} component={LoginPage} />
          <GuardedApp/>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
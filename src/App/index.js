import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LOGIN_PATH } from "./routePaths";
import LoginPage from "../pages/Login";
import GuardedApp from "./GuardedApp";
import { connect } from "react-redux";
import { setLoggedIn } from "../redux/actions";
import { useAsync } from "react-use";
import { verifyLoggedIn } from "../utils/APIUtils";
import LoadingBackdrop from "../components/LoadingBackdrop";

function App(props) {

  const loginVerification = useAsync(async () => {
    const response = await verifyLoggedIn();
    props.setLoggedIn(true);
    return response;
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      {loginVerification.loading ?
        <LoadingBackdrop open={true}/> :
        <Router>
          <Switch>
            <Route path={LOGIN_PATH} component={LoginPage} />
            <GuardedApp loggedIn={props.loggedIn} />
          </Switch>
        </Router>}
    </React.Fragment>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }), {
  setLoggedIn,
})(App);

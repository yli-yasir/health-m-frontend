import { Box } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LOGIN_ROUTE } from "../constants/routes";
import LoginPage from "../pages/login";
import { connect } from "react-redux";
import GuardedApp from "./GuardedApp";

function App(props) {
  return (
    <Box display="flex">
      <CssBaseline />
      <Router>
        <Switch>
          <Route path={LOGIN_ROUTE} component={LoginPage} />
          <GuardedApp loggedIn={props.loggedIn} />
        </Switch>
      </Router>
    </Box>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }))(App);

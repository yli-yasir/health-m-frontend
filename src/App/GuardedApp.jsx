import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import routes from "./routes";
import { LOGIN_PATH } from "./routePaths";
import { connect } from "react-redux";
import Main from "../components/layout/Main";

function GuardedApp(props) {
  return (
    <React.Fragment>
      {props.loggedIn ? (
        <Main>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.Component}
              />
            ))}
          </Switch>
        </Main>
      ) : (
        <Redirect to={LOGIN_PATH} />
      )}
    </React.Fragment>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }))(GuardedApp);

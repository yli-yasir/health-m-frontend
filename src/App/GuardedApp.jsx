import React from "react";
import { Switch, Route } from "react-router-dom";
import {Zoom } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import routes from "./routes";
import { LOGIN_PATH } from "../constants/routePaths";
import { TransitionGroup } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import Main from '../components/layout/Main';

function GuardedApp(props) {

  const location = useLocation();

  return (
    <React.Fragment>
      {!props.loggedIn && <Redirect to={LOGIN_PATH} />}
      {props.loggedIn && (
          <TransitionGroup component={null}>
            <Zoom timeout={1000} key={location.pathname}>
              <Main>
                <Switch location={location}>                  
                  {routes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      component={route.Component}
                    />
                  ))}
                </Switch>
              </Main>
            </Zoom>
          </TransitionGroup>
      )}
    </React.Fragment>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }))(GuardedApp);

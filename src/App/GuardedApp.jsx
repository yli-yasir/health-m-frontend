import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Box, Zoom } from "@material-ui/core";
import { Redirect } from "react-router-dom";
import AppBar from "./AppBar";
import routes from "./routes";
import { LOGIN_PATH } from "../constants/routePaths";

export default function GuardedApp(props) {
  const [appBarControls, setAppBarControls] = useState(null);

  const useAppBarControls = (controls) => {
    useEffect(() => {
      setAppBarControls(controls);
      return () => setAppBarControls(null);
    }, []);
  };

  return (
    <React.Fragment>
      {!props.loggedIn && <Redirect to={LOGIN_PATH} />}
      {props.loggedIn && (
        <React.Fragment>
          <AppBar>{appBarControls}</AppBar>
          <Box
            component="main"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            p={2}
          >
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  render={(props) => (
                    <Zoom in={true} timeout={6000}>
                      <route.Component
                        {...props}
                        useAppBarControls={useAppBarControls}
                      />
                    </Zoom>
                  )}
                />
              ))}
            </Switch>
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import AddPatient from "../pages/addPatient/Main";
import SearchPatients from "../pages/searchPatients/Main";
import ViewPatient from "../pages/viewPatient/Main";
import EditPatient from "../pages/editPatient/Main";
import Stats from "../pages/stats/Main";
import SettingsPage from "../pages/settings";
import {
  ADD_PATIENT_ROUTE,
  EDIT_PATIENT_ROUTE,
  LOGIN_ROUTE,
  SEARCH_ROUTE,
  SETTINGS_ROUTE,
  STATS_ROUTE,
  VIEW_PATIENT_ROUTE,
} from "../constants/routes";
import { Redirect } from "react-router-dom";
import AppSidebar from "./AppSidebar";

export default function GuardedApp(props) {
  return (
    <React.Fragment>
      {!props.loggedIn && <Redirect to={LOGIN_ROUTE} />}
      {props.loggedIn && (
        <React.Fragment>
          <AppSidebar />
          <Box
            component="main"
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
            p={2}
          >
            <Switch>
              <Route path={EDIT_PATIENT_ROUTE} component={EditPatient} />
              <Route path={VIEW_PATIENT_ROUTE} component={ViewPatient} />
              <Route path={SEARCH_ROUTE} component={SearchPatients} />
              <Route path={STATS_ROUTE} component={Stats} />
              <Route path={SETTINGS_ROUTE} component={SettingsPage} />
              <Route path={ADD_PATIENT_ROUTE} component={AddPatient} />
              <Route
                path="/"
                components={() => <Redirect to={SEARCH_ROUTE} />}
              />
            </Switch>
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

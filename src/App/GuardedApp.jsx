import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import AddPatient from "../pages/addPatient/Main";
import SearchPatientsPage from "../pages/searchPatients";
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
import AppBar from "./AppBar";

export default function GuardedApp(props) {
  const [appBarControls, setAppBarControls] = useState(null);

  const useAppBarControls = (controls)=>{
    useEffect(()=>{
      setAppBarControls(controls)
      return ()=> setAppBarControls(null);
    },[])
  }

  return (
    <React.Fragment>
      {!props.loggedIn && <Redirect to={LOGIN_ROUTE} />}
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
              <Route path={EDIT_PATIENT_ROUTE} component={EditPatient} />
              <Route path={VIEW_PATIENT_ROUTE} component={ViewPatient} />
              <Route
                path={SEARCH_ROUTE}
                render={(props) => (
                  <SearchPatientsPage {...props } useAppBarControls={useAppBarControls} setAppBarControls={setAppBarControls} />
                )}
              />
              <Route path={STATS_ROUTE} component={Stats} />
              <Route path={SETTINGS_ROUTE} component={SettingsPage} />
              <Route path={ADD_PATIENT_ROUTE} component={AddPatient} />
              <Route
                path="/"
                component={() => <Redirect to={SEARCH_ROUTE} />}
              />
            </Switch>
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

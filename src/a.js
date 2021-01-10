import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Sidebar from "./components/navigation/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import AddPatient from "./pages/addPatient/Main";
import SearchPatients from "./pages/searchPatients/Main";
import ViewPatient from "./pages/viewPatient/Main";
import EditPatient from "./pages/editPatient/Main";
import Stats from "./pages/stats/Main";
import SettingsPage from "./pages/settings";
import LoginPage from "./pages/login";
import {
  ADD_PATIENT_ROUTE,
  EDIT_PATIENT_ROUTE,
  LOGIN_ROUTE,
  SEARCH_ROUTE,
  SETTINGS_ROUTE,
  STATS_ROUTE,
  VIEW_PATIENT_ROUTE,
} from "./constants/routes";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { DonutLargeOutlined, SettingsOutlined } from "@material-ui/icons";
import { AddCircleOutline, BookOutlined } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItemLink from "./components/navigation/ListItemLink";
//Consider splitting into separate files

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

function GuardedApp(props) {
  return (
    <React.Fragment>
      {!props.loggedIn && <Redirect to={LOGIN_ROUTE} />}
      {props.loggedIn && (
        <React.Fragment>
          <AppSidebar />
          <Box component='main' display='flex' flexDirection='column' alignItems='center' width='100%' p={2}>
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


function AppSidebar() {
  return (
    <Sidebar>
      <List>
        <ListItemLink
          to={ADD_PATIENT_ROUTE}
          icon={<AddCircleOutline />}
          text="Add Patient"
        />
        <ListItemLink
          to={SEARCH_ROUTE}
          icon={<BookOutlined />}
          text="View Patients"
        />
        <ListItemLink
          to={STATS_ROUTE}
          icon={<DonutLargeOutlined />}
          text="Stats"
        />
        <ListItemLink
          to={SETTINGS_ROUTE}
          icon={<SettingsOutlined />}
          text="Settings"
        />
      </List>
    </Sidebar>
  )}


export default connect((state) => ({ loggedIn: state.loggedIn }))(App);

import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Box} from '@material-ui/core'
import AddPatient from './pages/addPatient/Main';
import SearchPatients from './pages/searchPatients/Main';

function App() {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Router>
        <Sidebar></Sidebar>
        <Content>
        <Switch>
          <Route path="/add">
            <AddPatient />
          </Route>
          <Route path="/search">
            <SearchPatients />
          </Route>
        </Switch>
        </Content>
      </Router>
    </Box>
  );
}

export default App;

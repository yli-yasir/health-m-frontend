import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Sidebar from "./components/app/Sidebar";
import Content from "./components/app/Content"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Box} from '@material-ui/core'
import AddPatient from './pages/addPatient/Main';
import SearchPatients from './pages/searchPatients/Main';
import ViewPatient from './pages/viewPatient/Main'
import EditPatient from "./pages/editPatient/Main";
import Stats from './pages/stats/Main';

function App() {
  return (
    <Box display='flex'>
      <CssBaseline />
      <Router>
        <Sidebar></Sidebar>
        <Content>
        <Switch>
          <Route path="/patients/new" component={AddPatient} />
          <Route path="/patients/:id/edit" component={EditPatient} />
          <Route path="/patients/:id" component={ViewPatient} />
          <Route path="/patients" component={SearchPatients} />
          <Route path='/stats' component={Stats}/>
        </Switch>
        </Content>
      </Router>
    </Box>
  );
}

export default App;

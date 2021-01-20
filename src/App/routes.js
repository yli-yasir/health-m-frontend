import {
  ADD_PATIENT_PATH,
  EDIT_PATIENT_PATH,
  LOGIN_PATH,
  SEARCH_PATH,
  SETTINGS_PATH,
  STATS_PATH,
  VIEW_PATIENT_PATH,
} from "../constants/routePaths";

import AddPatient from "../pages/addPatient/Main";
import SearchPatients from "../pages/searchPatients";
import ViewPatient from "../pages/viewPatient/Main";
import EditPatient from "../pages/editPatient/Main";
import Stats from "../pages/stats/Main";
import Settings from "../pages/settings";

import { Redirect } from "react-router-dom";


const routes = [
  { path: EDIT_PATIENT_PATH, Component: EditPatient },
  { path: VIEW_PATIENT_PATH, Component: ViewPatient },
  { path: SEARCH_PATH, Component: SearchPatients },
  { path: STATS_PATH, Component: Stats },
  { path: SETTINGS_PATH, Component: Settings },
  { path: ADD_PATIENT_PATH, Component: AddPatient },
  { path: "/", Component: () => <Redirect to={SEARCH_PATH} /> },
];

export default routes;

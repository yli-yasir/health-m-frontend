import {
  ADD_PATIENT_PATH,
  EDIT_PATIENT_PATH,
  SEARCH_PATH,
  SETTINGS_PATH,
  STATS_PATH,
  VIEW_PATIENT_PATH,
} from "./routePaths";

import AddPatient from "../pages/AddPatient";
import SearchPatients from "../pages/SearchPatients";
import ViewPatient from "../pages/ViewPatient";
import EditPatient from "../pages/EditPatient";
import Stats from "../pages/Stats";
import Settings from "../pages/Settings";

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

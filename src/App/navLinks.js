import {
  ADD_PATIENT_PATH,
  SEARCH_PATH,
  SETTINGS_PATH,
  STATS_PATH,
} from "../constants/routePaths";
import {
  DonutLargeOutlined,
  SettingsOutlined,
  AddCircleOutline,
  BookOutlined,
} from "@material-ui/icons";

const navLinks = [
  { icon: <AddCircleOutline />, label: "Add Patient", to: ADD_PATIENT_PATH },
  { icon: <BookOutlined />, label: "View Patients", to: SEARCH_PATH },
  { icon: <DonutLargeOutlined />, label: "Stats", to: STATS_PATH },
  // { icon: <SettingsOutlined />, text: "Settings", to: SETTINGS_PATH },
];

export default navLinks;

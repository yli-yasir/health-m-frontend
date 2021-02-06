import {
  ADD_PATIENT_PATH,
  SEARCH_PATH,
  SETTINGS_PATH,
  STATS_PATH,
} from "../../constants/routePaths";
import {
  DonutLargeOutlined,
  SettingsOutlined,
  AddCircleOutline,
  BookOutlined,
} from "@material-ui/icons";

const navLinks = [
  { icon: <AddCircleOutline />, text: "Add Patient", to: ADD_PATIENT_PATH },
  { icon: <BookOutlined />, text: "View Patients", to: SEARCH_PATH },
  { icon: <DonutLargeOutlined />, text: "Stats", to: STATS_PATH },
  // { icon: <SettingsOutlined />, text: "Settings", to: SETTINGS_PATH },
];

export default navLinks;

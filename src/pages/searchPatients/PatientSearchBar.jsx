import SearchBar from "../../components/SearchBar";
import { searchPatients } from "../../utils/APIUtils";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    [theme.breakpoints.up("xs")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
  },
}));

export default function PatientSearchBar() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  return (
    <SearchBar
      className={classes.searchBar}
      placeholder="Patient Name or Email"
      value={value}
      onChange={(e, { newValue }) => setValue(newValue)}
      getSuggestions={async (value) => await searchPatients(value, 5, 1)}
      getSuggestionValue={(patient) => patient.fullName}
    />
  );
}

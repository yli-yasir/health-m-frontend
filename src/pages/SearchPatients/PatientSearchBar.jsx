import SearchBar from "../../components/SearchBar";
import { searchPatients } from "../../utils/APIUtils";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { makePatientSearchLink } from "../../utils/URLUtils";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    marginBottom: theme.spacing(1),
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

  const history = useHistory();

  return (
    <SearchBar
      className={classes.searchBar}
      placeholder="Patient Name or Email"
      value={value}
      onChange={(e, { newValue }) => setValue(newValue)}
      onSearch={(inputValue) => history.push(makePatientSearchLink(inputValue)) }
      getSuggestions={async (value) => await searchPatients(value, 5, 1)}
      getSuggestionValue={(patient) => patient.fullName}
    />
  );
}

import SearchBar from "../../components/SearchBar";
import { searchPatients } from "../../utils/APIUtils";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useAsyncFn } from "react-use";

const useStyles = makeStyles((theme) => ({
  searchBar: {
    [theme.breakpoints.up('xs')]:{
      width:"95%"
    },
    [theme.breakpoints.up('md')]:{
      width:"70%"
    },
    [theme.breakpoints.up('lg')]:{
      width:"50%"
    },

  }
}));

export default function PatientSearchBar() {
  const classes = useStyles();

  const [value, setValue] = useState("");

  // useAsyncFn will return state and a callback that handles
  // race conditions, and will only update state if component is still mounted.
  const [, fetchSuggestions] = useAsyncFn(async (searchTerm) => {
    return await searchPatients(searchTerm, 5, 1);
  });

  return (
    <SearchBar
      className={classes.searchBar}
      placeholder="Patient Name or Email"
      value={value}
      onChange={(e, { newValue }) => setValue(newValue)}
      getSuggestions={async (value) => {
        return await fetchSuggestions(value);
      }}
      getSuggestionValue={(patient) => patient.fullName}
    />
  );
}

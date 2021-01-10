import SearchBar from "../../components/inputs/SearchBar";
import { searchPatients } from "../../utils/APIUtils";
import { useState } from "react";
import { buildQueryString } from "../../utils/URLUtils";
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
  searchBar: {
    display: "flex",
    borderRadius: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.grey[300],
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
  },
}));

export default function PatientSearchBar() {
  const classes = useStyles();
  const [text, setText] = useState("");

  return (
    <SearchBar
      className={classes.searchBar}
      text={text}
      onTextChange={(e, { newValue }) => setText(newValue)}
      getSuggestions={async (searchTerm) =>
        await searchPatients(searchTerm, 5, 1)
      }
      getSuggestionValue={(patient) => patient.fullName}
      makeSearchLink={(suggestedSearchTerm) => ({
        pathname: "/patients",
        search: buildQueryString("", { q: suggestedSearchTerm }),
      })}
    />
  );
}

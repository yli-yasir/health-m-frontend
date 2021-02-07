import SearchBar from "../../components/SearchBar";
import { searchPatients } from "../../utils/APIUtils";
import { useState } from "react";
import { buildQueryString } from "../../utils/URLUtils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

export default function PatientSearchBar() {
  const classes = useStyles();
  const [value, setValue] = useState("hguuuuuuuuuuuuuu");

  return (
    <SearchBar
      value={value}
      onChange={(e, { newValue }) => setValue(newValue)}
      getSuggestions={async (searchTerm) =>
        await searchPatients(searchTerm, 5, 1)
      }
      getSuggestionValue={(patient) => patient.fullName}
    />
  );
}

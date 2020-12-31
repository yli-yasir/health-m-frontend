import React from "react";
import PatientSearchBar from "./partials/PatientSearchBar";
import SearchResultsGrid from "./partials/SearchResultsGrid";
import { searchPatients } from "../../utils/APIUtils";
import AppBarSpace from "../../components/layout/AppBarSpace";
import Loader from "../../components/containers/Loader";
import { Box } from "@material-ui/core";
import { getParamValue } from "../../utils/URLUtils";
export default function SearchPatients(props) {
  const queryString = props.location.search;
  const searchTerm = getParamValue(queryString, "q");

  // const { error, loading, value: searchResults } = useAsync(async () => {
  //   const results = await searchPatients(10, 1);
  //   return results;
  // }, [query]);

  return (
    <React.Fragment>
      <PatientSearchBar />
      <AppBarSpace />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        <Loader
          deps={[queryString]}
          load={async () => {
            const results = await searchPatients(searchTerm,10,1);
            return results;
          }}
          render={(data) => <SearchResultsGrid results={data} />}
        />
      </Box>
    </React.Fragment>
  );
}

import React from "react";
import PatientSearchBar from "./PatientSearchBar";
import SearchResultsGrid from "./SearchResultsGrid";
import { searchPatients } from "../../utils/APIUtils";
import AppBarSpace from "../../components/layout/AppBarSpace";
import { Box, Typography } from "@material-ui/core";
import useQuery from "../../hooks/useQuery";
import { useState, useEffect } from "react";
import Loader from "../../components/loaders/Loader";
import InfinitePatientLoader from "./InfinitePatientLoader";

const RESULTS_PER_PAGE = 10;

export default function SearchPatients({ useAppBarControls }) {
  const queryParams = useQuery();
  const searchTerm = queryParams.get("q");
  const [results, setResults] = useState([]);

  useEffect(()=>console.log('mounted'),[])
  async function search(term, page) {
    const foundResults = await searchPatients(term, RESULTS_PER_PAGE, page);
    const prevResults = page === 1 ? [] : results;
    setResults([...prevResults, ...foundResults]);
    return foundResults;
  }


  return (
    <React.Fragment>
      <AppBarSpace />
      <AppBarSpace />

      <Loader
        load={async () => {
          return await search(searchTerm, 1);
        }}
        deps={[searchTerm]}
        render={() => (
          <Box
            minHeight="100vh"
            display="flex"
            alignItems="center"
            flexDirection="column"
            position="relative"
          >
            <SearchResultsGrid results={results} />
            <InfinitePatientLoader
              loadMore={async (currentPage) => {
                return await search(searchTerm, currentPage);
              }}
              resultsPerPage={RESULTS_PER_PAGE}
            />
          </Box>
        )}
      />
    </React.Fragment>
  );
}

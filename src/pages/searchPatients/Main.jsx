import React from "react";
import PatientSearchBar from "./partials/PatientSearchBar";
import SearchResultsGrid from "./partials/SearchResultsGrid";
import { searchPatients } from "../../utils/APIUtils";
import AppBarSpace from "../../components/layout/AppBarSpace";
import Loader from "../../components/loaders/Loader";
import { Box, Typography } from "@material-ui/core";
import useQuery from "../../hooks/useQuery";
import BottomScrollWaypoint from "../../components/misc/BottomScrollWaypoint";
import { useState } from "react";

const RESULTS_PER_PAGE = 10;
export default function SearchPatients() {
  const queryParams = useQuery();
  const searchTerm = queryParams.get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const [results, setResults] = useState([]);

  async function search() {
    console.log("seaching");
    const foundResults = await searchPatients(
      searchTerm,
      RESULTS_PER_PAGE,
      currentPage
    );
    setResults([...results, ...foundResults]);
    return foundResults;
  }

  const hasMoreResults = (foundResults)=> foundResults.length >= RESULTS_PER_PAGE
 
  return (
    <React.Fragment>
      <PatientSearchBar />
      <AppBarSpace />
      <Box
        minHeight="100vh"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignContent="flex-start"
        position="relative"
      >
        <SearchResultsGrid results={results} />
        <Loader deps={[currentPage]} load={search} render={(foundResults) =>
         (
              <React.Fragment>
              <Typography variant="caption">
                {hasMoreResults(foundResults)
                  ? "Scroll to bottom for more results"
                  : "No more results"}
                {hasMoreResults(foundResults) && (
                  <BottomScrollWaypoint
                    onEnter={() => setCurrentPage(currentPage + 1)}
                  />
                )}
              </Typography>
            </React.Fragment>
        )} />
      </Box>
    </React.Fragment>
  );
}


import React from "react";
import PatientSearchBar from "./PatientSearchBar";
import SearchResultsGrid from "./SearchResultsGrid";
import { Waypoint } from "react-waypoint";
import Page from "../../components/Page";
import LoadingBox from "../../components/LoadingBox";
import { Typography } from "@material-ui/core";
import usePatientSearch from "./usePatientSearch";

export default function SearchPatients() {

  const {
    page,
    setPage,
    totalResults,
    fetchState,
    hasMoreResults,
  } = usePatientSearch();

  return (
    <Page title="Search Patients">
      <PatientSearchBar />
      <LoadingBox loading={fetchState.loading} error={fetchState.error}>
        <SearchResultsGrid results={totalResults} />
        {hasMoreResults && (
          <Waypoint onEnter={() => setPage(page + 1)}></Waypoint>
        )}
        {totalResults.length === 0 && (
          <Typography variant="caption">No results</Typography>
        )}
      </LoadingBox>
    </Page>
  );
}

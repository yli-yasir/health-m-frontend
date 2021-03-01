import React from "react";
import PatientSearchBar from "./PatientSearchBar";
import SearchResultsGrid from "./SearchResultsGrid";
import Page from "../../components/layout/Page";
import LoadingBox from "../../components/LoadingBox";
import { Typography } from "@material-ui/core";
import usePatientSearch from "./usePatientSearch";
import { InView } from "react-intersection-observer";

export default function SearchPatients() {
  const {
    page,
    setPage,
    totalResults,
    fetchState,
    hasMoreResults,
  } = usePatientSearch();

  const { loading, error } = fetchState;

  const waypointShown = hasMoreResults && !fetchState.loading;

  return (
    <Page title="Search Patients">
      <PatientSearchBar />
      <LoadingBox loading={loading} error={error}>
        <SearchResultsGrid results={totalResults} />
        {!loading && totalResults.length === 0 && (
          <Typography variant="caption">No results</Typography>
        )}
        {!loading && hasMoreResults && (
          <InView
            as="div"
            onChange={(inView) => inView && setPage((page) => page + 1)}
          />
        )}
      </LoadingBox>
    </Page>
  );
}

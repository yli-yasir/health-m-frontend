import React from "react";
import PatientSearchBar from "./PatientSearchBar";
import SearchResultsGrid from "./SearchResultsGrid";
import { searchPatients } from "../../utils/APIUtils";
import useQuery from "../../hooks/useQuery";
import { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import Page from "../../components/Page";
import LoadingBox from "../../components/LoadingBox";
import { useAsync } from "react-use";

const RESULTS_PER_PAGE = 10;

export default function SearchPatients() {
  const searchTerm = useQuery().get("q");
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  //Reset page to 1 when the search term is changed.
  useEffect(() => {
    console.log("resettomg page");
    setPage(1);
  }, [searchTerm]);

  const fetchState = useAsync(async () => {
    return await searchPatients(searchTerm, RESULTS_PER_PAGE, page);
  }, [searchTerm, page]);

  //Whenever new fetch results come...
  useEffect(() => {
    const newResults = fetchState.value || [];
    const prevResults = page === 1 ? [] : results;
    setResults([...prevResults, ...newResults]);
  }, [fetchState.value]);

  const hasMoreResults =
    (fetchState.value ? fetchState.value.length : 0) ===
    RESULTS_PER_PAGE;

  return (
    <Page>
      <PatientSearchBar />
      <LoadingBox loading={fetchState.loading} error={fetchState.error}>
        <SearchResultsGrid results={results} />
        {hasMoreResults && (
          <Waypoint onEnter={() => setPage(page + 1)}></Waypoint>
        )}
      </LoadingBox>
    </Page>
  );
}

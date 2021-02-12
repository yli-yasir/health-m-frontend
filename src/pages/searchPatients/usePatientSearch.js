import { searchPatients } from "../../utils/APIUtils";
import useQuery from "../../hooks/useQuery";
import { useState, useEffect } from "react";
import { useAsync } from "react-use";

const RESULTS_PER_PAGE = 10;

export default function usePatientSearch() {
  const searchTerm = useQuery().get("q");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState([]);

  //Reset page to 1 when the search term is changed.
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  const fetchState = useAsync(async () => {
    return await searchPatients(searchTerm, RESULTS_PER_PAGE, page);
  }, [searchTerm, page]);

  //Whenever new fetch results come...
  useEffect(() => {
    const newResults = fetchState.value || [];
    const prevResults = page === 1 ? [] : totalResults;
    setTotalResults([...prevResults, ...newResults]);
  }, [fetchState.value]);

  const hasMoreResults =
    (fetchState.value ? fetchState.value.length : 0) === RESULTS_PER_PAGE;

  return {
    searchTerm,
    page,
    setPage,
    totalResults,
    fetchState,
    hasMoreResults,
  };
}

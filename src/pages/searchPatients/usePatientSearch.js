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
    setTotalResults([]);
    setPage(1);
  }, [searchTerm]);

  const fetchState = useAsync(
    async () => await searchPatients(searchTerm, RESULTS_PER_PAGE, page),
    [searchTerm, page]
  );

  useEffect(() => {
    if (fetchState.value) {
      const newResults = fetchState.value;
      setTotalResults((prevResults) => {
        return [...prevResults, ...newResults];
      });
    }
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

import { useState, useEffect } from "react";
import { useAsyncFn } from "react-use";

// getSuggestions should be an async function
export default function useAsyncAutoSuggest(getSuggestions) {
  const [suggestions, setSuggestions] = useState([]);

  // useAsyncFn will return state and a callback that handles
  // race conditions, and will only update its state if component is still mounted.
  const [suggestionsFetchState, fetchSuggestions] = useAsyncFn(
    async ({ value }) => {
      return await getSuggestions(value);
    },
    [getSuggestions]
  );

  //If the value to suggestionFetchState has changed.
  useEffect(() => {
    setSuggestions(suggestionsFetchState.value || []);
  }, [suggestionsFetchState.value]);

  return { suggestions, setSuggestions, fetchSuggestions };
}

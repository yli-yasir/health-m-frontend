import React, { useEffect, useState } from "react";
import { InputBase, Button, Box } from "@material-ui/core";
import { MenuItem, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { buildQueryString } from "../../utils/URLUtils";
import SearchInput from "./SearchInput";
import SuggestionsContainer from "./SuggestionsContainer";
import Suggestion from "./Suggestion";
import { useAsyncFn } from "react-use";

const useStyles = makeStyles((theme) => ({
  autoSuggestRoot: {
    position: "relative",
  },
}));

export default function SearchBar({
  value,
  onChange,
  getSuggestions,
  getSuggestionValue,
  placeholder,
  className,
}) {
  const classes = useStyles();

  const [suggestions, setSuggestions] = useState([]);

  // useAsyncFn will return state and a callback that handles
  // race conditions, and will only update its state if component is still mounted.
  const [suggestionsFetchState, fetchSuggestions] = useAsyncFn(
    async ({ value }) => {
      return await getSuggestions(value)},
    []
  );

  //If the value to suggestionFetchState has changed.
  useEffect(() => {
    setSuggestions(suggestionsFetchState.value || []);
  }, [suggestionsFetchState.value]);

  return (
    <Autosuggest
      theme={{
        container: classes.autoSuggestRoot + (` ${className}` || ""),
      }}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      inputProps={{ value, onChange, placeholder }}
      renderInputComponent={(inputProps) => <SearchInput {...inputProps} />}
      renderSuggestionsContainer={({ containerProps, children }) => {
        return (
          <SuggestionsContainer {...containerProps}>
            {children}
          </SuggestionsContainer>
        );
      }}
      renderSuggestion={(suggestion) => (
        <Suggestion value={getSuggestionValue(suggestion)} />
      )}
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
    />
  );
}

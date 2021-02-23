import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Autosuggest from "react-autosuggest";
import SearchInput from "./SearchInput";
import SuggestionsContainer from "./SuggestionsContainer";
import Suggestion from "./Suggestion";
import useAsyncAutoSuggest from "./useAsyncAutoSuggest";

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
  makeSearchLink,
  className,
}) {
  const classes = useStyles();

  const { suggestions, setSuggestions, fetchSuggestions } = useAsyncAutoSuggest(
    getSuggestions
  );

  return (
    <Autosuggest
      theme={{
        container: classes.autoSuggestRoot + (` ${className}` || ""),
      }}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      inputProps={{ value, onChange, placeholder }}
      renderInputComponent={(inputProps) => (
        <SearchInput makeSearchLink={makeSearchLink} {...inputProps} />
      )}
      renderSuggestionsContainer={({ containerProps, children }) => {
        return (
          <SuggestionsContainer {...containerProps}>
            {children}
          </SuggestionsContainer>
        );
      }}
      renderSuggestion={(suggestion) => (
        <Suggestion
          makeSearchLink={makeSearchLink}
          value={getSuggestionValue(suggestion)}
        />
      )}
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
    />
  );
}

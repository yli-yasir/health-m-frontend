import React, { useEffect, useState } from "react";
import Autosuggest from "react-autosuggest";
import SearchInput from "./SearchInput";
import SuggestionsContainer from "./SuggestionsContainer";
import Suggestion from "./Suggestion";
import useAutoSuggestAsync from "./useAutoSuggestAsync";
import useAutoSuggestTheme from "./useAutoSuggestTheme";

export default function SearchBar({
  value,
  onChange,
  getSuggestions,
  getSuggestionValue,
  onSuggestionSelected,
  onSearch,
  placeholder,
  className
}) {

  const theme = useAutoSuggestTheme();

  const { suggestions, setSuggestions, fetchSuggestions } = useAutoSuggestAsync(
    getSuggestions
  );

  return (
    <Autosuggest
      theme={{...theme ,container: `${theme.container} ${className}`}}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      inputProps={{ value, onChange, placeholder }}
      renderInputComponent={(inputProps) => (
        <SearchInput onSearch={onSearch} {...inputProps} />
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
          value={getSuggestionValue(suggestion)}
        />
      )}
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
      onSuggestionSelected={(e,{suggestionValue}) => onSearch(suggestionValue)}
    />
  );
}

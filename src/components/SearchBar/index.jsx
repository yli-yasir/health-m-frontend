import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  autoSuggestRoot: {
    position: "relative",
    width: "40%",
  },
}));

export default function SearchBar({
  value,
  onChange,
  getSuggestions,
  getSuggestionValue,
}) {
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestionsFetchRequested = async ({ value }) => {
    try {
      const foundSuggestions = await getSuggestions(value);
      setSuggestions(foundSuggestions);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return (
    <Autosuggest
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      inputProps={{ value, onChange }}
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

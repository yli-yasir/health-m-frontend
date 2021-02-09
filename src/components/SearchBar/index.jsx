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
      theme={{
        container: classes.autoSuggestRoot + (` ${className}` || ""),
      }}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      inputProps={{ value, onChange,placeholder }}
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

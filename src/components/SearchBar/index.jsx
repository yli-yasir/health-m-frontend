import React, { useState } from "react";
import { InputBase, Button, Box } from "@material-ui/core";
import { MenuItem, Paper } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import Autosuggest from "react-autosuggest";
import { buildQueryString } from "../../utils/URLUtils";

const useStyles = makeStyles((theme) => ({
  autoSuggestRoot: {
    position: "relative",
    width: "40%",
  }
}));

export default function SearchBar({
  text,
  onTextChange,
  getSuggestions,
  getSuggestionValue,
  makeSearchLink,
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
      inputProps={{
        value: text,
        onChange: onTextChange,
      }}
      renderInputComponent={SearchField}
      renderSuggestionsContainer={SuggestionsContainer}
      renderSuggestion={(suggestionItem) =>
        renderSuggestionWithValue(
          getSuggestionValue(suggestionItem),
          makeSearchLink
        )
      }
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
    />
  );
}


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
    width: "100%",
    position: "relative",
  },
  suggestionsContainerOpen: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: theme.spacing(3),
    right: theme.spacing(3),
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  searchInputContainer: {
    display: "flex",
    borderRadius: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.grey[300],
    "&:hover": {
      backgroundColor: fade(theme.palette.grey[300], 0.6),
    },
  },
  inputRoot: {
    width: "100%",
    paddingLeft: theme.spacing(2),
  },
  searchButton: {
    borderRadius: theme.spacing(2),
  },
  suggestion: {
    "& .suggestionLink": {
      width: "100%",
      textDecoration: "none",
      color: theme.palette.grey[700],
    },
    "& .suggestionText": {
      width: "100%",
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));

export default function SearchBar({
  text,
  onTextChange,
  getSuggestions,
  getSuggestionValue,
  makeSearchLink,
}) {
  const [suggestions, setSuggestions] = useState([]);

  const classes = useStyles();

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
      suggestions={suggestions}
      getSuggestionValue={getSuggestionValue}
      onSuggestionsFetchRequested={handleSuggestionsFetchRequested}
      onSuggestionsClearRequested={handleSuggestionsClearRequested}
      inputProps={{
        classes,
        value: text,
        onChange: onTextChange,
        makeSearchLink,
      }}
      theme={{
        container: classes.autoSuggestRoot,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion,
      }}
      renderSuggestionsContainer={SuggestionsContainer}
      renderInputComponent={SearchField}
      renderSuggestion={(suggestionItem) =>
        renderSuggestionWithValue(
          getSuggestionValue(suggestionItem),
          makeSearchLink)
      }
    />
  );
}

function SearchField(props) {
  const { classes, makeSearchLink, ...other } = props;

  return (
    <Box className={classes.searchInputContainer}>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.input,
        }}
        inputProps={{ "aria-label": "search" }}
        {...other}
      />
      <Link
        to={makeSearchLink(props.value)}
      >
        <Button className={classes.searchButton}>
          <SearchIcon color="primary" />
        </Button>
      </Link>
    </Box>
  );
}

function SuggestionsContainer(props) {
  return <Paper {...props.containerProps}>{props.children}</Paper>;
}

//Render a suggestion item
function renderSuggestionWithValue(suggestionValue,makeSearchLink) {
  return (
    <Link
      className="suggestionLink"
      to={makeSearchLink(suggestionValue)}
    >
      <MenuItem component="div">
        <SearchIcon color="primary" />
        <div className="suggestionText">
          &nbsp;&nbsp;&nbsp;{suggestionValue}
        </div>
      </MenuItem>
    </Link>
  );
}

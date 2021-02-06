import React from "react";
import { Button, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "../TextField";
import { Link } from "react-router-dom";
import { makeSearchLink } from "../../utils/URLUtils";

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    display: "flex",
    borderRadius: theme.spacing(2),
    width: "100%",
    backgroundColor: theme.palette.grey[300],
  },
  inputRoot: {
    width: "100%",
    paddingLeft: theme.spacing(2),
  },
  searchButton: {
    borderRadius: theme.spacing(2),
  },
}));

function SearchInput(props) {
  const classes = useStyles();

  return (
    <Box className={classes.searchInputContainer}>
      <TextField {...props} />
      <Button
        component={Link}
        to={makeSearchLink(props.value)}
        className={classes.searchButton}
      >
        <SearchIcon color="primary" />
      </Button>
    </Box>
  );
}

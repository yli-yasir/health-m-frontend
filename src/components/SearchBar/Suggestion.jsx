import React from "react";
import { MenuItem } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {makeSearchLink} from "../../utils/URLUtils";

const useStyles = makeStyles((theme) => ({
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

function Suggestion({value}) {
  //const classes = useStyles();
  return (
    <MenuItem
      component={Link}
      to={makeSearchLink(value)}
    >
      <SearchIcon color="primary" />
      <div>&nbsp;&nbsp;&nbsp;{value}</div>
    </MenuItem>
  );
}

export default Suggestion;

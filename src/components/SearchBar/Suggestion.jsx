import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { makeSearchLink } from "../../utils/URLUtils";
import ListItemLink from "../List/ListItemLink";


function Suggestion({ value }) {

  // react-autosuggest already renders these items in an li. 
  // To avoid this nesting, component prop is set to React.Fragment.  
  return (
    <ListItemLink
      icon={<SearchIcon color="primary" />}
      to={makeSearchLink(value)}
      text={value}
      component={React.Fragment}
    />
  );
}

export default Suggestion;

import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import { makeSearchLink } from "../../utils/URLUtils";
import ListItem from "../List/ListItem";


function Suggestion(props) {


  return (
    <ListItem
      icon={<SearchIcon color="primary" />}
      text={props.value}
      onClick={()=>console.log('hi')}
    />
  );
}

export default Suggestion;

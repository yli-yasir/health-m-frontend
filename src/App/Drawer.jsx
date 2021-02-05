import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import List from "@material-ui/core/List";
import ListItemLink from "../components/navigation/ListItemLink";
import navLinks from "./navLinks";
import {connect} from 'react-redux';
import {setLoggedIn} from "../redux/actions";
import {ExitToApp} from '@material-ui/icons'

function Drawer(props) {
  return (
    <Sidebar open={props.open} onClose={props.toggleDrawer}>
      <List>
        {navLinks.map((navLink) => (
          <ListItemLink
            key={navLink.label}
            onClick={props.toggleDrawer}
            {...navLink}
          />
        ))}
        <ListItemLink
        onClick={()=>props.setLoggedIn(false)}
        to=""
        icon={<ExitToApp/>}
        label="Logout"/>
      </List>
    </Sidebar>
  );
}

export default connect(null,{setLoggedIn})(Drawer)
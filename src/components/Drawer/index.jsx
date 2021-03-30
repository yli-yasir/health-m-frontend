import React, { useState } from "react";
import Sidebar from "./Sidebar";
import List from "../List";
import ListItem from "../List/ListItem";
import ListItemLink from "../List/ListItemLink";
import navLinks from "./navLinks";
import { connect } from 'react-redux';
import { setLoggedIn } from "../../redux/actions";
import { ExitToApp } from '@material-ui/icons'
import { logout } from "../../utils/APIUtils";

function Drawer(props) {

  return (
    <Sidebar open={props.open} onClose={props.toggleDrawer}>
      <List>
        {navLinks.map((navLink) => (
          <ListItemLink
            nav
            key={navLink.text}
            onClick={props.toggleDrawer}
            {...navLink}
          />
        ))}
        <ListItem
          button
          onClick={() => { 
            logout();
            props.setLoggedIn(false);
          }}
          icon={<ExitToApp />}
          text="Logout" />
      </List>
    </Sidebar>
  );
}

export default connect(null, { setLoggedIn })(Drawer)
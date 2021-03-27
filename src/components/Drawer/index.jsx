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
import Snackbar from "../Snackbar";

function Drawer(props) {

  const [feedbackMessage, setFeedbackMessage] = useState('');

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
            setFeedbackMessage("Logged out! Redirecting you...");
          }}
          icon={<ExitToApp />}
          text="Logout" />
      <Snackbar message={feedbackMessage} setMessage={setFeedbackMessage} onClose={() => {
        props.setLoggedIn(false);
        
      }} />
      </List>
    </Sidebar>
  );
}

export default connect(null, { setLoggedIn })(Drawer)
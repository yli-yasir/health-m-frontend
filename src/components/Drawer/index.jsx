import React, { useState } from "react";
import Sidebar from "./Sidebar";
import List from "../List";
import ListItem from "../List/ListItem";
import ListItemLink from "../List/ListItemLink";
import navLinks from "./navLinks";
import { connect } from 'react-redux';
import { setLoggedIn } from "../../redux/actions";
import { ExitToApp } from '@material-ui/icons'
import useFetch from "../../hooks/useFetch";
import { logout } from "../../utils/APIUtils";
import Snackbar from "../Snackbar";

function Drawer(props) {

  const [feedbackMessage, setFeedbackMessage] = useState('');

  const [logoutState, requestLogout] = useFetch(async () => await logout(), {
    onLoad: () => setFeedbackMessage("Logging out..."),
    onSuccess: () => setFeedbackMessage("Logged out! Redirecting you..."),
    onError: () => setFeedbackMessage("Something went wrong")
  }, [])

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
          onClick={requestLogout}
          icon={<ExitToApp />}
          text="Logout" />
        <Snackbar message={feedbackMessage} setMessage={setFeedbackMessage}
          autoHideDuration={1000}
          onClose={() => {
            if (logoutState.value) {
              props.setLoggedIn(false)
            }
          }} />
      </List>
    </Sidebar>
  );
}

export default connect(null, { setLoggedIn })(Drawer)
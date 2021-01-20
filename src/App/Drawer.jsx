import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import List from "@material-ui/core/List";
import ListItemLink from "../components/navigation/ListItemLink";
import navLinks from "./navLinks";

export default function AppSidebar(props) {
  return (
    <Sidebar open={props.open} onClose={props.toggleDrawer}>
      <List>
        {navLinks.map((navLink) => (
          <ListItemLink
            key={navLink.text}
            onClick={props.toggleDrawer}
            {...navLink}
          />
        ))}
      </List>
    </Sidebar>
  );
}

import React from "react";
import Sidebar from "../components/navigation/Sidebar";
import {
  ADD_PATIENT_ROUTE,
  SEARCH_ROUTE,
  SETTINGS_ROUTE,
  STATS_ROUTE,
} from "../constants/routes";
import { DonutLargeOutlined, SettingsOutlined } from "@material-ui/icons";
import { AddCircleOutline, BookOutlined } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItemLink from "../components/navigation/ListItemLink";

export default function AppSidebar(props) {
  const makeListItemLinkProps = (icon, text, to) => ({
    icon,
    text,
    to,
    onClick: props.toggleDrawer,
  });

  return (
    <Sidebar open={props.open} onClose={props.toggleDrawer}>
      <List>
        <ListItemLink
          {...makeListItemLinkProps(
            <AddCircleOutline />,
            "Add Patient",
            ADD_PATIENT_ROUTE
          )}
        />
        <ListItemLink
          {...makeListItemLinkProps(
            <BookOutlined />,
            "View Patients",
            SEARCH_ROUTE
          )}
        />

        <ListItemLink
          {...makeListItemLinkProps(
            <DonutLargeOutlined />,
            "Stats",
            STATS_ROUTE
          )}
        />

        <ListItemLink
          {...makeListItemLinkProps(
            <SettingsOutlined />,
            "Settings",
            SETTINGS_ROUTE
          )}
        />

      </List>
    </Sidebar>
  );
}

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

export default function AppSidebar() {
    return (
      <Sidebar>
        <List>
          <ListItemLink
            to={ADD_PATIENT_ROUTE}
            icon={<AddCircleOutline />}
            text="Add Patient"
          />
          <ListItemLink
            to={SEARCH_ROUTE}
            icon={<BookOutlined />}
            text="View Patients"
          />
          <ListItemLink
            to={STATS_ROUTE}
            icon={<DonutLargeOutlined />}
            text="Stats"
          />
          <ListItemLink
            to={SETTINGS_ROUTE}
            icon={<SettingsOutlined />}
            text="Settings"
          />
        </List>
      </Sidebar>
    )}
  
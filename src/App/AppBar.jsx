import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../components/icons/Logo";
import AppSidebar from "./AppSidebar";
import { InsertDriveFile } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function HMAppBar(props) {

  const classes = useStyles();

  const [isDrawerOpen,setDrawerOpen]= useState(false);

  const toggleDrawer= () => setDrawerOpen(!isDrawerOpen);
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="secondary"
          aria-label="menu"
          onClick={toggleDrawer}
        >
          <Logo height="50px" width="50px" />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Health-M
        </Typography>
        {props.children}
      </Toolbar>
      <AppSidebar
      open={isDrawerOpen}
      toggleDrawer={toggleDrawer}
      />
    </AppBar>
  );
}

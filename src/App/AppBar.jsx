import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Logo from "../components/icons/Logo";
import AppDrawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppBar(props) {
  const classes = useStyles();

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen);

  return (
    <MaterialAppBar>
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
      <AppDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </MaterialAppBar>
  );
}

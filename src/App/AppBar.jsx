import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Logo from "../components/icons/Logo";
import {Menu} from '@material-ui/icons'
import AppDrawer from "./Drawer";
import {Box} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexShrink:0,
    marginRight:theme.spacing(3),
    marginLeft: theme.spacing(1)
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
          aria-label="menu"
          color='inherit'
          onClick={toggleDrawer}
        >
          <Menu/>
        </IconButton>
        <Logo height="50px" width="50px" />
        <Typography variant="h6" className={classes.title}>
          Health-M
        </Typography>
        <Box display='flex' flexGrow='1'>
        {props.children}
        </Box>
      </Toolbar>
      <AppDrawer open={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </MaterialAppBar>
  );
}

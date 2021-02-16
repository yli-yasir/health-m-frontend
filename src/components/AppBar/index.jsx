import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MaterialAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";
import Logo from "../icons/Logo";
import {Menu as MenuIcon} from '@material-ui/icons'
import Drawer from "../Drawer";
import {Box} from '@material-ui/core/';
import AppBarSpace from './AppBarSpace';
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

function AppBar(props) {
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
          <MenuIcon/>
        </IconButton>
        <Logo height="50px" width="50px" />
        <Typography variant="h6" className={classes.title}>
          {"Health-M / " + props.title} 
        </Typography>
        <Box display='flex' flexGrow='1'>
        {props.children}
        </Box>
      </Toolbar>
      <Drawer open={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </MaterialAppBar>
  );
}

export default AppBar;
export {AppBarSpace};
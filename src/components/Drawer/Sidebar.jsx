import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { AddCircleOutline, BookOutlined } from "@material-ui/icons";
import ListItemLink from '../List/ListItemLink'
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  activeLink: {
    color: theme.palette.secondary.main 
  },
  listItemRoot: {
    color: 'inherit'
  }
}));



export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      {...props}
    >
      <div className={classes.toolbar} />
      <Divider />
      {props.children}
    </Drawer>
  );}
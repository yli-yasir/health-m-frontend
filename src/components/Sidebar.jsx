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
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
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

function ListItemLink(props) {
  const {text, icon, to } = props;
  const classes =useStyles();
  return (
    <li>
      <ListItem
        button
        component={NavLink}
        to={to}
        activeClassName={classes.activeLink}
      >
        {icon ? <ListItemIcon classes= {{root: classes.listItemRoot}}>{icon}</ListItemIcon> : null}
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
}

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink to="/add" icon={<AddCircleOutline/>} text="Add Patient" />
        <ListItemLink to="/view" icon={<BookOutlined/>} text="View Patients" />
      </List>
    </Drawer>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, Typography } from "@material-ui/core";
import Logo from "../icons/Logo";
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: '240px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '240px',
  },
  // necessary for content to be below app bar
  logoBar: {
    ...theme.mixins.toolbar,
    maxHeight: "64px",
    display:"flex",
    padding: theme.spacing(1, 2),
    alignItems:'center',
  },
  logo:{
    height:'100%',
    marginRight:theme.spacing(2)
  },
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
      <div className={classes.logoBar} >
        <Logo className={classes.logo} />
        <Typography variant="h6">Health-M</Typography>
      </div>
      <Divider />
      {props.children}
    </Drawer>
  );
}
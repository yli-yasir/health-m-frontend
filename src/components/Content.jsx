import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(1),
      ...theme.mixins.toolbar
    },
    toolbar: theme.mixins.toolbar
  }));

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
          <div className={classes.toolbar}></div>

        {props.children}
  </main>
  );
}

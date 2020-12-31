import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AppBarSpace from "../layout/AppBarSpace";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    width: "90%",
  },
}));

export default function HMPaper(props) {

 const classes = useStyles();
  return (
    <React.Fragment>
    <AppBarSpace />
    <Paper className={classes.paper} elevation={3}>
      {props.children}
    </Paper>
    </React.Fragment>
   );
}

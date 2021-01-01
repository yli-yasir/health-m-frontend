import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AppBarSpace from "../layout/AppBarSpace";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    width: "90%",
    minHeight:'250px',
  },
}));

export default function HMPaper(props) {

 const classes = useStyles();
  return (
    <React.Fragment>
    <AppBarSpace />
    <Paper className={classes.paper + ' ' + (props.className || '')} elevation={3}>
      {props.children}
    </Paper>
    </React.Fragment>
   );
}

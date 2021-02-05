import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import AppBarSpace from "../layout/AppBarSpace";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: "250px",
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]:{
      width:'90%'
    },
    [theme.breakpoints.up('md')]:{
      width: '70%'
    },
    [theme.breakpoints.up('lg')]:{
      width:'50%'
    }
  },
  centerContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function HMPaper(props) {
  const classes = useStyles();
  const { centerContent, className: propClassName, ...remainingProps } = props;

  return (
    <React.Fragment>
      <AppBarSpace />
      <Paper
        className={
          classes.paper +
          " " +
          (centerContent ? classes.centerContent : "") +
          " " +
          (propClassName || "")
        }
        elevation={3}
        {...remainingProps}
      >
        {props.children}
      </Paper>
    </React.Fragment>
  );
}

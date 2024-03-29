import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    minHeight: "250px",
    margin: theme.spacing(3,0),
    [theme.breakpoints.up('xs')]:{
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

export default function ResponsivePaper(props) {
  const classes = useStyles();
  const { centerContent, className: propClassName, ...remainingProps } = props;

  return (
    <React.Fragment>
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

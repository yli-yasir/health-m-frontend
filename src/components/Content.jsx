import React from "react";
import {Box} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
}));

export default function Sidebar(props) {
  const classes = useStyles();

  return (
    <Box component='main' display='flex' flexDirection='column' alignItems='center' width='100%' p={2}>
      <div className={classes.toolbar}></div>
      {props.children}
    </Box>
  );
}

import React from 'react'
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: theme.spacing(3),
    right: theme.spacing(3),
    width:"100%",
    "& ul": {
      margin: 0,
      padding: 0,
      listStyleType: "none",
    }
  },

}));

const SuggestionsContainer  = React.forwardRef((props,ref)=>{
  const classes = useStyles();
  return <Paper ref={ref} {...props} className={classes.container}>{props.children}</Paper>;
})


export default SuggestionsContainer;

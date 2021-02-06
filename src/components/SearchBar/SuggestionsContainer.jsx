import {Paper} from '@material-ui/core';
;
const useStyles = makeStyles((theme) => ({
    suggestionsContainerOpen: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: theme.spacing(3),
      right: theme.spacing(3),
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none",
    },
  
  }));
function SuggestionsContainer(props) {
    const classes = useStyles();
    return <Paper className={classes.suggestionsContainerOpen} {...props}>{props.children}</Paper>;
  }

export default SuggestionsContainer;
import { makeStyles } from "@material-ui/core/styles";

const useAutoSuggestTheme = makeStyles((theme)=>({
    autoSuggestRoot: {
        position: "relative",
      },
    container: {
      position: "relative",
    },
    suggestionsContainer: {
        width: '100%',
        position:'absolute',
        zIndex: 1,
        marginTop: theme.spacing(1),
        "& ul": {
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }
      },
  suggestion: {
    "& *":{
      userSelect: 'none'
    }
  },
   suggestionHighlighted: {
     backgroundColor: theme.palette.grey[100]
   }
    
}));

export default useAutoSuggestTheme;
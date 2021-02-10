import PatientCard from "./PatientCard";
import { Box, Zoom } from "@material-ui/core";
import { TransitionGroup } from "react-transition-group";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("xs")]: {
      width: "95%",
    },
    [theme.breakpoints.up("md")]: {
      width: "80%",
    }
  },
}));

export default function SearchResultsContainer({ results }) {

  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
    >
      <TransitionGroup enter={true} component={null}>
        {results.map((patient) => (
          <Zoom key={patient._id} timeout={500}>
            <PatientCard patient={patient} />
          </Zoom>
        ))}
      </TransitionGroup>
    </Box>
  );
}

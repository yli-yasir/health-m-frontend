import { Paper, Box,Slide, Typography } from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../components/icons/Logo";
import {Redirect} from "react-router-dom";
import {SEARCH_PATH} from "../../App/routePaths";
import { setLoggedIn } from "../../redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1),
    width: "500px",
  },
}));

function LoginPage(props) {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      {props.loggedIn && <Redirect to={SEARCH_PATH} />}
      <Slide direction="down" in={true} timeout={1500}>
      <Paper className={classes.formContainer}>
        <Typography variant="h2">Health-M</Typography>
        <Logo height="128px" width="128px" />
        <LoginForm setLoggedIn={props.setLoggedIn}/>
      </Paper>
      </Slide>
    </Box>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }), {
  setLoggedIn,
})(LoginPage);





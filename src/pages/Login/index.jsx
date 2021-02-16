import { Paper, Box } from "@material-ui/core";
import LoginForm from "../../components/LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../components/icons/Logo";
import { connect } from "react-redux";
import { setLoggedIn } from "../../redux/actions";
import {Redirect} from "react-router-dom";

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
  console.log(props.loggedIn)
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      {props.loggedIn && <Redirect to="/" />}
      <Paper className={classes.formContainer}>
        <Logo height="128px" width="128px" />
        <LoginForm setLoggedIn={props.setLoggedIn} />
      </Paper>
    </Box>
  );
}

export default connect((state) => ({ loggedIn: state.loggedIn }), {
  setLoggedIn,
})(LoginPage);

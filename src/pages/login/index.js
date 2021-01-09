import { Paper,Divider } from "@material-ui/core";
import LoginForm from "../../components/forms/LoginForm";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../components/app/Logo";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: theme.spacing(1),
    width:"500px" },
}));

function LoginPage(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.formContainer}>
      <Logo height="128px" width="128px" />
      <LoginForm/>
    </Paper>
  );
}

export default LoginPage;

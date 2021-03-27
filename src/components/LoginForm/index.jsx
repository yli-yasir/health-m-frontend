import { Formik } from "formik";
import { getTouchedErrors } from "../../utils/formikUtils";
import { schema as userSchema } from "../../models/user";
import ProgressButton from "../inputs/ProgressButton";
import validationSchema from "./validationSchema";
import { makeStyles } from "@material-ui/core";
import { login } from "../../utils/APIUtils";
import React,{ useState, Fragment } from "react";
import initialValues from "./initialValues";
import useFetch from "../../hooks/useFetch";
import FormikTextField from "../inputs/FormikTextField";
import Snackbar from "../Snackbar";
import {SEARCH_PATH} from "../../App/routePaths";
import {Redirect} from 'react-router-dom';
import {AUTH_FAIL} from "../../constants/httpStatusCodes";
const useStyles = makeStyles((theme) => ({
  form: { width: "100%" },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

export default function LoginFormFormik(props) {

  const [feedbackMessage, setFeedbackMessage] = useState('')

  const [submitState, handleSubmit] = useFetch(async (values) => await login(values), {
    onSuccess: () => setFeedbackMessage('Logged in! Redirecting you...'),
    onError: () => {
      const error = submitState.error;
      const failMessage =
        error.response && error.response.status === AUTH_FAIL
          ? "Invalid Credentials. Please try again."
          : "Something went wrong. Please try again later.";
      setFeedbackMessage(failMessage);
    }
  }, []);

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {LoginForm}
      </Formik>
      <Snackbar message={feedbackMessage} setMessage={setFeedbackMessage} onClose={() => {
        console.log('hi')
        if (submitState.value){
        props.setLoggedIn(true);
        }
      }} />
    </Fragment>

  );
}

function LoginForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) {

  const classes = useStyles();

  const formikBag = {
    onChange: handleChange,
    onBlur: handleBlur,
    errors: getTouchedErrors(touched, errors),
    values
  };

  return (

    <form onSubmit={handleSubmit}>

      <FormikTextField
        name={userSchema.EMAIL}
        label="Email"
        defaultHelperText="Demo Email: admin@healthm.com"
        formikBag={formikBag}
      />

      <FormikTextField
        name={userSchema.PASSWORD}
        label="Password"
        type="password"
        defaultHelperText="Demo Password: admin"
        formikBag={formikBag}
      />

      <ProgressButton
        type="submit"
        color="primary"
        variant="contained"
        isWorking={isSubmitting}
        className={classes.submitButton}
      >
        Login
      </ProgressButton>
    </form>
  );
}



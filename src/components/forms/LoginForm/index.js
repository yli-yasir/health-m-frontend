import { Formik } from "formik";
import { getTouchedErrors } from "../../../utils/formikUtils";
import HMTextField from "../../inputs/HMTextField";
import ProgressButton from "../../inputs/ProgressButton";
import validationSchema from "./validationSchema";
import { makeStyles } from "@material-ui/core";
import { login } from "../../../utils/APIUtils";
import { useState } from "react";
import { AUTH_FAIL } from "../../../constants/httpStatusCodes";
import initialValues from "./initialValues";
import HMSnackbar from "../../feedback/HMSnackbar";
import React from "react";
import FeedbackContainer from "../../feedback/FeedbackContainer";
const useStyles = makeStyles((theme) => ({
  form: { width: "100%" },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

export default function FormikLoginForm() {

  async function handleSubmit(
    values,
    setSubmitting,
    setFailMessage,
    setSuccessful
  ) {
    try {
      await login(values);
      setSuccessful(true);
    } catch (e) {
      setSubmitting(false);
      const failMessage =
        e.response.status === AUTH_FAIL
          ? "Invalid Credentials. Please try again."
          : "Something went wrong. Please try again later.";
      setFailMessage(failMessage);
    }
  }

  return (
      <FeedbackContainer
        render={(setFailMessage, setSuccessful) => (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) =>
              handleSubmit(values, setSubmitting, setFailMessage,setSuccessful)
            }
          >
            {LoginForm}
          </Formik>
        )}
        onSuccessRedirectTo="/"
      />
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
  const touchedErrors = getTouchedErrors(touched, errors);
  const makeProps = (label, name, defaultHelperText) => ({
    label,
    name,
    onChange: handleChange,
    onBlur: handleBlur,
    error: Boolean(touchedErrors[name]),
    helperText: touchedErrors[name] || defaultHelperText,
    value: values[name],
    fullWidth: true,
  });
  return (
    <form onSubmit={handleSubmit}>
      <HMTextField
        {...makeProps("Email", "email", "Demo Email: admin@healthm.com")}
      />
      <HMTextField
        type="password"
        {...makeProps("Password", "password", "Demo Pasword: admin")}
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

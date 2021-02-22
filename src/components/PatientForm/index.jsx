import React from "react";
import { Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { getTouchedErrors } from "../../utils/formikUtils";
import sections from "./sections";
import validationSchema from "./validationSchema";
import ProgressButton from "../inputs/ProgressButton";
import HMSnackbar from "../Snackbar";
import { Redirect } from "react-router-dom";

export default function PatientFormContainer(props) {
  const {
    initialValues,
    onSubmit,
    feedbackMessage,
    clearFeedbackMessage,
    success,
    onSuccessRedirect,
  } = props;
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {renderPatientForm}
      </Formik>
      {success && <Redirect to={onSuccessRedirect} />}
      <HMSnackbar
        clearMessage={clearFeedbackMessage}
        message={feedbackMessage}
      />
    </React.Fragment>
  );
}

function renderPatientForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
}) {
  const formikBag = {
    values,
    errors: getTouchedErrors(touched, errors),
    onChange: handleChange,
    onBlur: handleBlur,
    setFieldValue,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit}>
        {sections.map((Section) => (
          <Section formikBag={formikBag} />
        ))}
        <ProgressButton
          type="submit"
          color="primary"
          variant="contained"
          isWorking={isSubmitting}
        >
          Submit
        </ProgressButton>
      </form>
    </MuiPickersUtilsProvider>
  );
}

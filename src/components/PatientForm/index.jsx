import React from "react";
import { Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PatientNameSection from "./PatientNameSection";
import PatientBodySection from "./PatientBodySection";
import PedigreeChartSection from "./PedigreeChartSection";
import PatientContactInfoSection from "./PatientContactInfoSection";
import { getTouchedErrors } from "../../utils/formikUtils";
import PatientAdmissionSection from "./PatientAdmissionSection";
import FamilySection from "./FamilySection";
import DoctorNotesSection from "./DoctorNotesSection";
import DiagnosisTreatmentSection from "./DiagnosisTreatmentSection";
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
        {patientForm}
      </Formik>
      {success && <Redirect to={onSuccessRedirect} />}
      <HMSnackbar
        clearMessage={clearFeedbackMessage}
        message={feedbackMessage}
      />
    </React.Fragment>
  );
}

function patientForm({
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
        <PatientNameSection formikBag={formikBag} />
        <PatientBodySection formikBag={formikBag} />
        <PatientContactInfoSection formikBag={formikBag} />
        <PatientAdmissionSection formikBag={formikBag}/>
        <FamilySection formikBag={formikBag} />
        {/*
        <PedigreeChartSection
          chartData={values.pedigreeChart}
          saveChart={(json) => {
            setFieldValue("pedigreeChart", json);
          }}
        />
        <DiagnosisTreatmentSection {...sectionProps} />
        <DoctorNotesSection {...sectionProps} />
        <ProgressButton
          type="submit"
          color="primary"
          variant="contained"
          isWorking={isSubmitting}
        >
          Submit
        </ProgressButton> */}
      </form>
    </MuiPickersUtilsProvider>
  );
}

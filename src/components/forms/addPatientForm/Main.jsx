import React, { useEffect } from "react";
import { Formik, validateYupSchema } from "formik";
import { Button, Paper, Box } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import PatientNameSection from "./partials/PatientNameSection";
import PatientBodySection from "./partials/PatientBodySection";
import PedigreeChartSection from "./partials/PedigreeChartSection";
import PatientContactInfoSection from "./partials/PatientContactInfoSection";
import { getTouchedErrors } from "../../../utils/formikUtils";
import PatientAdmissionSection from "./partials/PatientAdmissionSection";
import FamilySection from "./partials/FamilySection";
import DoctorNotesSection from "./partials/DoctorNotesSection";
import DiagnosisTreatmentSection from "./partials/DiagnosisTreatmentSection";
import PaperPage from '../../presentationals/PaperPage'
import validationSchema from './validationSchema';

export default function AddPatient(props) {
  const { initialValues, onSubmit } = props;


  return (
    <PaperPage>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {form}
          </Formik>
      </PaperPage>
  );
}

function form({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
}) {
  
  const sectionProps = {
    values,
    errors: getTouchedErrors(touched, errors),
    onChange: handleChange,
    onBlur: handleBlur,
    setFieldValue,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit}>
        <PatientNameSection {...sectionProps} />

        {/* Birthdate is a special input, therefore it needs a custom onChange handler */}
        <PatientBodySection
          onBirthDateChange={(date) => setFieldValue("birthDate", date)}
          {...sectionProps}
        />

        <PatientContactInfoSection {...sectionProps} />

        <PatientAdmissionSection
          onAdmissionDateChange={(date) =>
            setFieldValue("admissionDate", date)
          }
          {...sectionProps}
        />

        <FamilySection {...sectionProps} />

        <PedigreeChartSection
          chartData={values.pedigreeChart}
          saveChart={(json) => {
            setFieldValue("pedigreeChart", json);
          }}
        />

        <DiagnosisTreatmentSection {...sectionProps}/>
        <DoctorNotesSection {...sectionProps} />

        <Button
          disabled={isSubmitting}
          type="submit"
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </form>
    </MuiPickersUtilsProvider>
  );
}


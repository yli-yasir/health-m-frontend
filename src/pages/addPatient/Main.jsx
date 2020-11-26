import React from "react";
import { Formik, validateYupSchema } from "formik";
import { Button, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HMTextField from "../../components/HMTextField";
import FormSection from "../../components/FormSection";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import HMSelect from "../../components/HMSelect";
import PatientNameSection from "./sections/PatientNameSection";
import PatientBodySection from "./sections/PatientBodySection";
import { initialValues, validationSchema, handleSubmit } from "./formProps";
import PatientContactInfoSection from "./sections/PatientContactInfoSection";
import { hasOnlyNumbers, makeTouchedErrors } from "../../utils";

const useStyles = makeStyles((theme) => ({}));

export default function addPatient() {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {FormikForm}
        </Formik>
      </Box>
    </Paper>
  );
}

function FormikForm({
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
    errors: makeTouchedErrors(touched, errors),
    onChange: handleChange,
    onBlur: handleBlur,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit}>
        <PatientNameSection {...sectionProps} />

        {/* Birthdate is a special input, therefore it needs a custom onChange handler */}
        <PatientBodySection
          onBirthDateChange={(date) => setFieldValue("patientBirthDate", date)}
          {...sectionProps}
        />

        <PatientContactInfoSection {...sectionProps} />

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

// Avoided naming it parent intentionally
function PersonFormSection(props) {
  const ageSelectDataset = [...Array(150).keys()].map((num) => ({
    value: num + 1,
    label: num + 1,
  }));

  const educationSelectDataset = [
    { value: "Other", label: "Other" },
    { value: "Highschool", label: "Highschool" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
  ];

  return (
    <FormSection title={props.title}>
      <HMTextField label="Name" />

      <HMSelect label="Age" items={ageSelectDataset} />

      <HMSelect label="Education" items={educationSelectDataset} />

      <HMTextField label="Occupation"></HMTextField>

      <HMTextField label="Health History" multiline rows={4}>
        {" "}
      </HMTextField>
    </FormSection>
  );
}

function MotorDevMonthSelect(props) {
  const dataset = [...Array(36).keys()].map((num) => ({
    value: num + 1,
    label: num + 1 + " Months",
  }));
  return <HMSelect label={props.label} items={dataset}></HMSelect>;
}

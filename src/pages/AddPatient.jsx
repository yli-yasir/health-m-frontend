import React from "react";
import { Formik } from "formik";
import { InputAdornment, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HMTextField from "../components/HMTextField";
import HMDivider from "../components/HMDivider";
import HMRadioGroup from "../components/HMRadioGroup";
import FormSection from "../components/FormSection";
const useStyles = makeStyles((theme) => ({}));

function addPatient() {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Formik initialValues={{ email: "", password: "" }}>
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
}) {
  //const classes = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <FormSection title="Patient Name">
        <HMTextField id="first-name" label="First Name" />

        <HMTextField id="last-name" label="Last Name" />
      </FormSection>


    <FormSection title="Body Info.">
      <HMRadioGroup
        label="Gender"
        name="gender"
        value="male"
        radios={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />

      <HMTextField
        id="body-weight"
        label="Body Weight"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />
</FormSection>

      <FormSection title="Contact Info.">
      <HMTextField id="phone-number" label="Phone Number" />

      <HMTextField id="address" label="Address" />
      </FormSection>
    </form>
  );
}

export default addPatient;

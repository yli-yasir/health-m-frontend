import React from "react";
import { Formik } from "formik";
import { InputAdornment, Paper, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HMTextField from "../components/HMTextField";
import HMRadioGroup from "../components/HMRadioGroup";
import FormSection from "../components/FormSection";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import HMDatePicker from "../components/HMDatePicker";
import HMCheckBox from "../components/HMCheckBox";
import HMSelect from "../components/HMSelect";
import PedigreeChart from "../components/PedigreeChart";

const useStyles = makeStyles((theme) => ({}));

export default function addPatient() {
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
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
        </FormSection>

        <FormSection title="Contact Info.">
          <HMTextField id="phone-number" label="Phone Number" />

          <HMTextField id="address" label="Address" />
        </FormSection>

        <FormSection title="Patient Admission">
          <HMDatePicker label="Admission date" />
          <HMTextField id="brought-by" label="Patient Brought By" />
        </FormSection>

        <FormSection title="Family">
            <PedigreeChart />
        </FormSection>

          {/* <HMCheckBox label="Separation" />
          <HMCheckBox label="Divorce" />
          <HMCheckBox label="Death" />
          <HMCheckBox label="Stepfamily" /> */}
      </form>
    </MuiPickersUtilsProvider>
  );
}

// Avoided naming it parent intentionally
function MotherFatherFormSection(props) {

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

      <HMSelect label="Age" items={ageSelectDataset} />

      <HMSelect label="Education" items={educationSelectDataset}/>

      <HMTextField label="Occupation"></HMTextField>

      <HMTextField label="Health History" multiline rows={4}> </HMTextField>

    </FormSection>
  );
}

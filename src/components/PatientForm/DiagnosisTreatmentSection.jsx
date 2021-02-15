import React from "react";
import FormSection from "presentationals/FormSection";
import HMSelect from "inputs/HMSelect";
import HMTextField from "TextField";
import { Button, Paper, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import {
  NULL_MEDICAL_CODE,
  MEDICAL_CODES,
} from "constants/medicalCodes";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.grey[100],
  },
}));

const dataset = [NULL_MEDICAL_CODE,...MEDICAL_CODES].map((code) => ({
  key: code,
  value: code,
  label: code,
}));

export default function DiagnosisTreatmentSection({
  values,
  errors,
  onChange: handleChange,
  onBlur: handleBlur,
  setFieldValue,
}) {
  const classes = useStyles();

  return (
    <FormSection title="Diagnosis & Treatment">
      {values.diagnosisTreatment.map((medicalCode, index) => {
        return (
          // It's not recommended to depend on index when generating keys
          // However, it's going to be used here because performance is not currently an issue.
          <Paper
            variant="outlined"
            className={classes.paper}
            key={`diagnosisTreatment[${index}]`}
          >
            <Typography variant="h6">{"Diagnosis " + (index + 1)}</Typography>
            <HMSelect
              label="Diagnosis"
              items={dataset}
              onChange={handleChange}
              name={`diagnosisTreatment[${index}].diagnosis`}
              value={values.diagnosisTreatment[index].diagnosis}
            />
            <HMTextField
              label="Treatment"
              name={`diagnosisTreatment[${index}].treatment`}
              value={values.diagnosisTreatment[index].treatment}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(getTreatmentError(errors, index))}
              helperText={getTreatmentError(errors, index)}
              disabled={!Boolean(values.diagnosisTreatment[index].diagnosis)}
            />
          </Paper>
        );
      })}

      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setFieldValue("diagnosisTreatment", [
            ...values.diagnosisTreatment,
            { diagnosis: "", treatment: "" },
          ]);
        }}
      >
        Add Diagnosis &nbsp;
        <AddCircle />
      </Button>
    </FormSection>
  );
}

const getTreatmentError = (errors, index) => {
  if (errors.diagnosisTreatment && errors.diagnosisTreatment[index]) {
    return errors.diagnosisTreatment[index].treatment;
  }
  return "";
};

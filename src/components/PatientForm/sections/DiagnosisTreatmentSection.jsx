import React from "react";
import FormSection from "../../layout/Section";
import HMSelect from "../../inputs/Select";
import HMTextField from "../../inputs/TextField";
import { Button, Paper, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { NULL_MEDICAL_CODE, MEDICAL_CODES } from "../medicalCodes";
import {DIAGNOSIS_TREATMENT} from "../inputNames";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.grey[100],
  },
}));

const dataset = [NULL_MEDICAL_CODE, ...MEDICAL_CODES].map((code) => ({
  key: code,
  value: code,
  label: code,
}));

export default function DiagnosisTreatmentSection({ formikBag }) {
  const { values, errors, onChange, onBlur, setFieldValue } = formikBag;
  const classes = useStyles();

  return (
    <FormSection title="Diagnosis & Treatment">
      {values[DIAGNOSIS_TREATMENT].map((medicalCode, index) => {

        const itemKey = `${DIAGNOSIS_TREATMENT}[${index}]`;
        const treatmentError = getTreatmentError(errors, index)
        return (
          // It's not recommended to depend on index when generating keys
          // However, it's going to be used here because performance is not currently an issue.
          <Paper
            variant="outlined"
            className={classes.paper}
            key={itemKey}
          >
            <Typography variant="h6">{"Diagnosis " + (index + 1)}</Typography>
            <HMSelect
              label="Diagnosis"
              items={dataset}
              onChange={onChange}
              name={`${itemKey}.diagnosis`}
              value={values.diagnosisTreatment[index].diagnosis}
            />
            <HMTextField
              label="Treatment"
              name={`${itemKey}.treatment`}
              value={values.diagnosisTreatment[index].treatment}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(treatmentError)}
              helperText={treatmentError}
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

import React from "react";
import FormSection from "../../../components/FormSection";
import HMSelect from "../../../components/HMSelect";
import HMTextField from "../../../components/HMTextField";
import { Button, Paper, Typography } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: { padding: theme.spacing(2), marginBottom: theme.spacing(1),
  backgroundColor: theme.palette.grey[100] },
}));

export default function DiagnosisTreatmentSection({
  values,
  errors,
  onChange: handleChange,
  onBlur: handleBlur,
  setFieldValue,
}) {
  const classes = useStyles();

  const dataset = [
    { key: "a1", value: "a1", label: "a1" },
    { key: "b1", value: "b1", label: "b1" },
    { key: "c1", value: "c1", label: "c1" },
  ];

  return (
    <FormSection title="Diagnosis & Treatment">
      {values.diagnosisTreatment.map((medicalCode, index) => {
        return (
          // It's not recommended to depend on index when generating keys
          // However, it's going to be used here because performance is not an issue.
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

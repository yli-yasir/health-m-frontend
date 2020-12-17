import React from "react";
import FormSection from "../../../components/FormSection";
import HMSelect from "../../../components/HMSelect";
import HMTextField from "../../../components/HMTextField";
import {Button} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons';

export default function DiagnosisTreatmentSection({
  values,
  errors,
  onChange: handleChange,
  onBlur: handleBlur,
}) {
  const dataset = [{key:"a1",value:"a1",label:"a1"}, {key:"b1",value:"b1",label:"b1"},{key:"c1",value:"c1",label:"c1"}];

  return (
    <FormSection title="Diagnosis & Treatment">
      {values.diagnosisTreatment.map((medicalCode, index) => {

        return (
          <React.Fragment key={values.diagnosisTreatment[index].diagnosis}>
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
          </React.Fragment>);
      })}
      <Button variant='contained' color='primary'>Add Diagnosis &nbsp;<AddCircle /></Button>
    </FormSection>
  );
}

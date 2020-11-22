import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";
import HMRadioGroup from "../../../components/HMRadioGroup";
import HMDatePicker from "../../../components/HMDatePicker";

import {InputAdornment} from "@material-ui/core";

export default function PatientBodySection(props) {
  return (
    <FormSection title="Patient Body Info.">

    <HMRadioGroup
      label="Gender"
      name="gender"
      value={props.genderValue}
      name="patientGender"
      onChange={props.onChange}
      onBlur={props.onBlur}
      radios={[
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]}
    />
    
    <HMTextField
      name="patientBodyWeight"
      label="Body Weight"
      value={props.bodyWeightValue}
      onChange={props.onChange}
      onBlur={props.onBlur}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">Kg</InputAdornment>
        ),
      }}
    />

    <HMDatePicker value={props.birthDateValue} onChange={props.onBirthDateChange} onBlur={props.onBlur} label="Birth date" />


  </FormSection>
  );
}

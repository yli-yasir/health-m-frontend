import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";
import HMRadioGroup from "../../../components/HMRadioGroup";
import HMDatePicker from "../../../components/HMDatePicker";

import {InputAdornment} from "@material-ui/core";

export default function PatientBodySection({
  values,
  touched,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
  onBirthDateChange: handleBirthDateChange
}) {
  return (
    <FormSection title="Patient Body Info.">

    <HMRadioGroup
      label="Gender"
      name="gender"
      value={values.patientGender}
      name="patientGender"
      onChange={handleChange}
      onBlur={handleBlur}
      radios={[
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]}
    />
    
    <HMTextField
      name="patientBodyWeight"
      label="Body Weight"
      value={values.patientBodyWeight}
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">Kg</InputAdornment>
        ),
      }}
    />

    <HMDatePicker value={values.patientBirthDate} onChange={handleBirthDateChange} onBlur={handleBlur} label="Birth date" />


  </FormSection>
  );
}

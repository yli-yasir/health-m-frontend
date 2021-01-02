import HMTextField from "../../../inputs/HMTextField";
import FormSection from "../../../presentationals/FormSection";
import HMRadioGroup from "../../../inputs/HMRadioGroup";
import HMDatePicker from "../../../inputs/HMDatePicker";

import {InputAdornment} from "@material-ui/core";

export default function PatientBodySection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
  onBirthDateChange: handleBirthDateChange,
}) {
  return (
    <FormSection title="Patient Body Info.">

    <HMRadioGroup
      label="Gender"
      name="gender"
      value={values.gender}
      onChange={handleChange}
      onBlur={handleBlur}
      radios={[
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ]}
    />
    
    <HMTextField
      name="bodyWeight"
      label="Body Weight"
      value={values.bodyWeight}
      error={Boolean(errors.bodyWeight)}
      helperText={errors.bodyWeight}
      type="number"
      onChange={handleChange}
      onBlur={handleBlur}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">Kg</InputAdornment>
        ),
      }}
    />

    <HMDatePicker value={values.birthDate} onChange={handleBirthDateChange} onBlur={handleBlur} label="Birth Date"
    maxDate={new Date(new Date().getFullYear()-1, new Date().getMonth())}/>


  </FormSection>
  );
}

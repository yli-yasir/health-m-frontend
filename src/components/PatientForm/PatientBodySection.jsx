import TextField from "../../TextField";
import FormSection from "../../FormSection";
import RadioGroup from "../../RadioGroup";
import DatePicker from "../../HMDatePicker";
import { InputAdornment } from "@material-ui/core";
import { GENDER, BODY_WEIGHT, BIRTH_DATE } from "../inputNames";

export default function PatientBodySection({ formikBag, onBirthDateChange }) {
  return (
    <FormSection title="Patient Body Info.">
      <RadioGroup
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

      <TextField
        name="bodyWeight"
        label="Body Weight"
        value={values.bodyWeight}
        error={Boolean(errors.bodyWeight)}
        helperText={errors.bodyWeight}
        type="number"
        onChange={handleChange}
        onBlur={handleBlur}
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      <DatePicker
        value={values.birthDate}
        onChange={handleBirthDateChange}
        onBlur={handleBlur}
        label="Birth Date"
        maxDate={new Date(new Date().getFullYear() - 1, new Date().getMonth())}
      />
    </FormSection>
  );
}

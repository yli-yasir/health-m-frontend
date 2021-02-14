import TextField from "../../TextField";
import FormSection from "../../FormSection";

export default function PatientNameSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {


  return (
    <FormSection title="Patient Name">
      <TextField
        name="fullName"
        label="Full Name"
        value={values.fullName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.fullName)}
        helperText={errors.fullName}
      />

    </FormSection>
  );
}

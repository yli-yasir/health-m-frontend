import HMTextField from "../../../inputs/HMTextField";
import FormSection from "../../../presentationals/FormSection";

export default function PatientNameSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {


  return (
    <FormSection title="Patient Name">
      <HMTextField
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

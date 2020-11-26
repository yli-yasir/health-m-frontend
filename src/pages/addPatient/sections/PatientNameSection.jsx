import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";

export default function PatientNameSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {


  return (
    <FormSection title="Patient Name">
      <HMTextField
        name="patientFirstName"
        label="First Name"
        value={values.patientFirstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.patientFirstName)}
        helperText={errors.patientFirstName}
      />

      <HMTextField
        name="patientLastName"
        label="Last Name"
        value={values.patientLastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.patientLastName)}
        helperText={errors.patientLastName}
      />
    </FormSection>
  );
}

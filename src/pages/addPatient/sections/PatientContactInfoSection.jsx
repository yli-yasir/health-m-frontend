import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";
import PhoneField from "../../../components/PhoneField";

export default function PatientContactInfoSection({
  values,
  touched,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {
  return (
    <FormSection title="Contact Info.">
      <HMTextField
        name="patientAddress"
        label="Patient Address"
        value={values.address}
        error={Boolean(errors.patientAddress)}
        helperText={errors.patientAddress}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <PhoneField
        name="patientPhoneNumber"
        label="Patient Phone Number"
        value={values.patientPhoneNumber}
        error={Boolean(errors.patientPhoneNumber)}
        helperText={errors.patientPhoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />

    </FormSection>
  );
}

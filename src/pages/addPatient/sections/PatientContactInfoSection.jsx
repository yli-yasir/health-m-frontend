import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";

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
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <HMTextField
        name="patientPhoneNumber"
        label="Patient Phone Number"
        value={values.patientPhoneNumber}
        onChange={handleChange}
        onBlur= {handleBlur}
      />
    </FormSection>
  );
}

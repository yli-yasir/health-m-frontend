import HMTextField from "../../../inputs/HMTextField";
import FormSection from "../../../presentationals/FormSection";
import PhoneField from "../../../inputs/PhoneField";

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
        name="address"
        label="Patient Address"
        value={values.address}
        error={Boolean(errors.address)}
        helperText={errors.address}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <PhoneField
        name="phoneNumber"
        label="Patient Phone Number"
        value={values.phoneNumber}
        error={Boolean(errors.phoneNumber)}
        helperText={errors.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
      />

    </FormSection>
  );
}

import HMTextField from "../../../TextField";
import FormSection from "../../../presentationals/FormSection";
import PhoneField from "../../../inputs/PhoneField";

export default function PatientContactInfoSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {
  const makeProps = (name, label) => ({
    name,
    label,
    value: values[name],
    error: Boolean(errors[name]),
    helperText: errors[name],
    onChange: handleChange,
    onBlur: handleBlur,
  });

  return (
    <FormSection title="Contact Info.">
      <HMTextField {...makeProps("address", "Address")} />

      <HMTextField {...makeProps("email", "Email")} />

      <PhoneField {...makeProps("phoneNumber", "Phone Number")} />
    </FormSection>
  );
}

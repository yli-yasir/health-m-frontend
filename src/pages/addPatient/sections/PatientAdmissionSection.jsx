import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";
import HMDatePicker from "../../../components/HMDatePicker";

export default function PatientAdmissionSection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
  onAdmissionDateChange: handleAdmissionDateChange
}) {
  return (
    <FormSection title="Admission Info.">

      <HMDatePicker
        value={values.patientAdmissionDate}
        onChange={handleAdmissionDateChange}
        onBlur={handleBlur}
        label="Admission Date"
        maxDate={new Date()}
        maxDateMessage={errors.patientAdmissionDate}
      />

      <HMTextField
        name="patientAdmittor"
        label="Patient admitted by"
        value={values.patientAdmittor}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(errors.patientAdmittor)}
        helperText={errors.patientAdmittor}
      />
    </FormSection>
  );
}

import FormSection from "../../../presentationals/FormSection";
import HMTextField from "../../../inputs/HMTextField";

export default function DoctorNotesSection({
  onChange : handleChange,
  onBlur : handleBlur,
  errors,
  values,
}) {
  return (
    <FormSection title="Doctor's Notes">
      <HMTextField
        label='Mental State Examination'
        value={values.doctorNotes}
        error={errors.doctorNotes}
        helperText={errors.doctorNotes}
        onChange={handleChange}
        onBlur={handleBlur}
        name="doctorNotes"
        multiline
        rows={6}

      ></HMTextField>
    </FormSection>
  );
}

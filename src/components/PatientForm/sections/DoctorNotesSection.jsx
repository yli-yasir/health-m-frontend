import FormSection from "../../layout/Section";
import FormikTextField from "../../inputs/FormikTextField";
import { DOCTOR_NOTES } from "../inputNames";

export default function DoctorNotesSection({ formikBag }) {
  return (
    <FormSection title="Doctor's Notes">
      <FormikTextField
        label="Mental State Examination"
        name={DOCTOR_NOTES}
        formikBag={formikBag}
        multiline
        rows={6}
      />
    </FormSection>
  );
}

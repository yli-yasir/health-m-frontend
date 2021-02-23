import FormikTextField from "../../inputs/FormikTextField";
import FormSection from "../../layout/Section";
import FormikDatePicker from "../../inputs/FormikDatePicker";
import { ADMISSION_DATE, ADMITTOR_NAME } from "../inputNames";

export default function PatientAdmissionSection({ formikBag }) {
  return (
    <FormSection title="Admission Info.">
      <FormikDatePicker
        name={ADMISSION_DATE}
        label="Admission Date"
        formikBag={formikBag}
        maxDate={new Date()}
      />

      <FormikTextField
        name={ADMITTOR_NAME}
        label="Patient admitted by"
        formikBag={formikBag}
      />
    </FormSection>
  );
}

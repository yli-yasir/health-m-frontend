import FormikTextField from "../../FormikTextField";
import FormSection from "../FormSection";
import { FULL_NAME } from "./inputNames";

export default function PatientNameSection({ formikBag }) {
  return (
    <FormSection title="Patient Name">
      <FormikTextField
        name={FULL_NAME}
        label="Full Name"
        formikBag={formikBag}
      />
    </FormSection>
  );
}

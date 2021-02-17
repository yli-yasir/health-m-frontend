import FormikTextField from "../inputs/FormikTextField";
import Section from "../layout/Section";
import { FULL_NAME } from "./inputNames";

export default function PatientNameSection({ formikBag }) {
  return (
    <Section title="Patient Name">
      <FormikTextField
        name={FULL_NAME}
        label="Full Name"
        formikBag={formikBag}
      />
    </Section>
  );
}

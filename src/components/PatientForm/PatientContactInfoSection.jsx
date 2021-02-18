import FormikTextField from "../inputs/FormikTextField";
import FormSection from "../layout/Section";
import FormikPhoneField from "../inputs/FormikPhoneField";
import { ADDRESS, EMAIL, PHONE_NUMBER } from "./inputNames";

export default function PatientContactInfoSection({ formikBag }) {
  return (
    <FormSection title="Contact Info.">
      <FormikTextField name={ADDRESS} label="Address" formikBag={formikBag} />

      <FormikTextField name={EMAIL} label="Email" formikBag={formikBag} />

      <FormikPhoneField
        name={PHONE_NUMBER}
        label="Phone Number"
        formikBag={formikBag}
      />
    </FormSection>
  );
}

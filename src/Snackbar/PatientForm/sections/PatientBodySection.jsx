import FormikTextField from "../../inputs/FormikTextField";
import Section from "../../layout/Section";
import FormikRadioGroup from "../../inputs/FormikRadioGroup";
import FormikDatePicker from "../../inputs/FormikDatePicker";
import { InputAdornment } from "@material-ui/core";
import { GENDER, BODY_WEIGHT, BIRTH_DATE } from "../inputNames";

export default function PatientBodySection({ formikBag }) {
  return (
    <Section title="Patient Body Info.">
      <FormikRadioGroup
        name={GENDER}
        label="Gender"
        formikBag={formikBag}
        radios={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />

      <FormikTextField
        name={BODY_WEIGHT}
        label="Body Weight"
        formikBag={formikBag}
        type="number"
        InputProps={{
          startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
        }}
      />

      <FormikDatePicker
        name={BIRTH_DATE}
        label="Birth Date"
        formikBag={formikBag}
        maxDate={new Date(new Date().getFullYear() - 1, new Date().getMonth())}
      />
    </Section>
  );
}

import FormSection from "../../layout/Section";
import FormikCheckboxedTextField from "../../inputs/FormikCheckboxedTextField";
import {
  PARENTS_SEPARATED,
  PARENTS_SEPARATED_DESCRIPTION,
  PARENTS_DIVORCED,
  PARENTS_DIVORCED_DESCRIPTION,
  PARENTS_DIED,
  PARENTS_DIED_DESCRIPTION,
  STEP_FAMILY,
  STEP_FAMILY_DESCRIPTION,
} from "../inputNames";

export default function FamilySection({ formikBag }) {
  return (
    <FormSection title="Family Info.">
      <FormikCheckboxedTextField
        checkboxLabel="Parents Separation"
        checkboxName={PARENTS_SEPARATED}
        textFieldName={PARENTS_SEPARATED_DESCRIPTION}
        formikBag={formikBag}
      />

      <FormikCheckboxedTextField
        checkboxLabel="Parents Divorce"
        checkboxName={PARENTS_DIVORCED}
        textFieldName={PARENTS_DIVORCED_DESCRIPTION}
        formikBag={formikBag}
      />

      <FormikCheckboxedTextField
        checkboxLabel="Parents Died"
        checkboxName={PARENTS_DIED}
        textFieldName={PARENTS_DIED_DESCRIPTION}
        formikBag={formikBag}
      />

      <FormikCheckboxedTextField
        checkboxLabel="Step Family"
        checkboxName={STEP_FAMILY}
        textFieldName={STEP_FAMILY_DESCRIPTION}
        formikBag={formikBag}
      />
    </FormSection>
  );
}

import * as names from "./inputNames";

export default function getInitialValues() {
  const todaysDate = new Date();
  const lastYearsDate = new Date(
    todaysDate.getFullYear() - 1,
    todaysDate.getMonth()
  );

  // These keys must be the same as the names of inputs in the form to work with Formik
  return {
    [names.FULL_NAME]: "",
    [names.GENDER]: "male",
    [names.EMAIL]: "",
    [names.BODY_WEIGHT]: "",
    [names.BIRTH_DATE]: lastYearsDate,
    [names.ADDRESS]: "",
    [names.PHONE_NUMBER]: "",
    [names.PEDIGREE_CHART]: "",
    [names.ADMITTOR_NAME]: "",
    [names.ADMISSION_DATE]: todaysDate,
    [names.PARENTS_SEPARATED]: false,
    [names.PARENTS_SEPARATED_DESCRIPTION]: "",
    [names.PARENTS_DIVORCED]: false,
    [names.PARENTS_DIVORCED_DESCRIPTION]: "",
    [names.PARENTS_DIED]: false,
    [names.PARENTS_DIED_DESCRIPTION]: "",
    [names.STEP_FAMILY]: false,
    [names.STEP_FAMILY_DESCRIPTION]: "",
    [names.DOCTOR_NOTES]: "",
    [names.DIAGNOSIS_TREATMENT]: [{ diagnosis: "", treatment: "" }],
  };
}

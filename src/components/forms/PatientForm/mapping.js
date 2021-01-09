import getInitialValues from "./initialValues";
import { NULL_MEDICAL_CODE } from "../../../constants/medicalCodes";
// Transform the input values object into an object which conforms to our REST API spec.
export function valuesToPatient(values) {
  const diagnosisTreatmentObj = _diagnosisTreatmentArrayToObj(
    values.diagnosisTreatment
  );
  return { ...values, diagnosisTreatment: diagnosisTreatmentObj };
}

// Transform a patient Object coming from the REST API into an 'input values' object to use in our form
export function patientToValues(patient) {
  // Get a blank values obj
  const initialValues = getInitialValues();
  // The patient object coming from the database might contain some
  // extra fields, or it might be missing some fields.
  //  Merge the patient object into the blank intial values object
  // As it stands now, the patient object and values object share same key naming
  // So we merge as follows
  Object.keys(patient)
    .filter((key) => key in initialValues)
    .forEach((key) => {
      initialValues[key] =
        key === "diagnosisTreatment"
          ? _diagnosisTreatmentObjToArray(patient[key])
          : patient[key];
    });

  return initialValues;
}

// From Db to form 
function _diagnosisTreatmentObjToArray(diagnosisTreatmentObj) {
  let diagnosisTreatmentArray;
  //Transform the diagnosisTreatmentMap to an array
  if (Object.keys(diagnosisTreatmentObj).length !== 0) {
    diagnosisTreatmentArray = Object.keys(diagnosisTreatmentObj).map((key) => ({
      diagnosis: key,
      treatment: diagnosisTreatmentObj[key],
    }));
  } else {
    diagnosisTreatmentArray = getInitialValues().diagnosisTreatment;
  }
  console.log(diagnosisTreatmentArray);
  return diagnosisTreatmentArray;
}

// From form to Db
function _diagnosisTreatmentArrayToObj(diagnosisTreatmentArray) {
  const diagnosisTreatmentObj = diagnosisTreatmentArray.reduce(
    (acc, pair) =>
      pair.diagnosis && pair.diagnosis !== NULL_MEDICAL_CODE
        ? { ...acc, [pair.diagnosis]: pair.treatment }
        : acc,
    {}
  );
  return diagnosisTreatmentObj;
}

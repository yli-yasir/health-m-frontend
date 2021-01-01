import AddPatientForm from "../../components/forms/addPatientForm/Main";
import getInitialValues from "../../components/forms/addPatientForm/initialValues";
import { addPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// Get an object with the initial values.
const initialValues = getInitialValues();

export default function AddPatient() {
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [successId, setSuccessId] = useState("");

  async function handleSubmit(values, { setSubmitting }) {
    const patient = valuesToPatient(values);
    try {
      console.log(patient);
      const patientId = await addPatient(patient);
      setSuccessId(patientId);
    } catch (e) {
      console.error(e);
      setFeedbackMessage("Something went wrong!");
      setSubmitting(false);
    }
  }

  return (
    <React.Fragment>
      <AddPatientForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        feedbackMessage={feedbackMessage}
        clearFeedbackMessage={() => setFeedbackMessage("")}
      />

      {successId && (
        <Redirect
          to={{
            pathname: `/patients/${successId}`,
            state: { message: 'Patient added successfully!' },
          }}
        />
      )}
    </React.Fragment>
  );
}

// Transform the values object into an object which conforms to our REST API spec.
function valuesToPatient(values) {
  const diagnosisTreatmentArray = values.diagnosisTreatment;
  const diagnosisTreatmentMap = diagnosisTreatmentArray.reduce(
    (a, pair) =>
      pair.diagnosis ? { ...a, [pair.diagnosis]: pair.diagnosisTreatment } : a,
    {}
  );
  console.log(diagnosisTreatmentMap);
  return { ...values, diagnosisTreatment: diagnosisTreatmentMap };
}

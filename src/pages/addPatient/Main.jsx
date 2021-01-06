import PatientForm from "../../components/forms/PatientForm/Main";
import getInitialValues from "../../components/forms/PatientForm/initialValues";
import { addPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import PaperPage from '../../components/presentationals/PaperPage';
import {valuesToPatient} from '../../components/forms/PatientForm/mapping'
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
    <PaperPage>
      <PatientForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        feedbackMessage={feedbackMessage}
        clearFeedbackMessage={() => setFeedbackMessage("")}
        success={Boolean(successId)}
        onSuccessRedirect={{
          pathname: `/patients/${successId}`,
          state: { message: 'Patient added successfully!' },
        }}
      />

    </PaperPage>
  );
}



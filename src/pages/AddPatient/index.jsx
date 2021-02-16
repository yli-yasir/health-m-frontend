import PatientForm from "../../components/PatientForm";
import getInitialValues from "../../components/PatientForm/initialValues";
import { addPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import Page from "../../components/layout/Page";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import { valuesToPatient } from "../../components/PatientForm/mapping";
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
    <Page title="Add Patient">
      <ResponsivePaper>
        <PatientForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          feedbackMessage={feedbackMessage}
          clearFeedbackMessage={() => setFeedbackMessage("")}
          success={Boolean(successId)}
          onSuccessRedirect={{
            pathname: `/patients/${successId}`,
            state: { message: "Patient added successfully!" },
          }}
        />
      </ResponsivePaper>
    </Page>
  );
}

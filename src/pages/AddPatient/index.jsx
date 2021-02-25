import PatientForm from "../../components/PatientForm";
import getInitialValues from "../../components/PatientForm/initialValues";
import { addPatient } from "../../utils/APIUtils";
import React, { useState, useEffect } from "react";
import Page from "../../components/layout/Page";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import { valuesToPatient } from "../../components/PatientForm/mapping";
import useFetch from "../../hooks/useFetch";
import { Redirect } from "react-router-dom";
import { makePatientLink } from "../../utils/URLUtils";

// Get an object with the initial values.
const initialValues = getInitialValues();

export default function AddPatient() {

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [submitState, handleSubmit] = useFetch(
    async (values) => {
      const patient = valuesToPatient(values);
      return await addPatient(patient);
    },
    {
      onSuccess: () => {
        setFeedbackMessage("Patient Submitted. Redirecting you...");
      },
      onError: () => {
        setFeedbackMessage("Something went wrong.");
      },
    }
  );

  return (
    <Page title="Add Patient">
      <ResponsivePaper>
        <PatientForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          feedbackMessage={feedbackMessage}
          onFeedbackMessageClose={() => {
            //Clear the message to close the snackbar
            setFeedbackMessage("");
            if (submitState.value) {
              setShouldRedirect(true);
            }
          }}
        />
      </ResponsivePaper>
      {shouldRedirect && <Redirect to={makePatientLink(submitState.value)} />}
    </Page>
  );
}

import PatientForm from "../../components/PatientForm";
import getInitialValues from "../../components/PatientForm/initialValues";
import { addPatient } from "../../utils/APIUtils";
import React, { useState, useEffect } from "react";
import Page from "../../components/layout/Page";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import { valuesToPatient } from "../../components/PatientForm/mapping";
import useFetch from "../../hooks/useFetch";

// Get an object with the initial values.
const initialValues = getInitialValues();

export default function AddPatient() {
  
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [submitState, handleSubmit] = useFetch(
    async (values) => {
      const patient = valuesToPatient(values);
      return await addPatient(patient);
    },
    () =>{
      submitState.value
        ? setFeedbackMessage("Patient submitted.")
        : setFeedbackMessage("Something went wrong.")
    }
  );


  return (
    <Page title="Add Patient">
      <ResponsivePaper>
        <PatientForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          feedbackMessage={feedbackMessage}
          onFeedbackMessageClose={()=>{
            //Clear the message to close the snackbar
            setFeedbackMessage("");
            // Do any further logic here....
          }
          }
        />
      </ResponsivePaper>
    </Page>
  );
}

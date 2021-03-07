import PatientForm from "../../components/PatientForm";
import { updatePatient as upPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import { valuesToPatient } from "../../components/PatientForm/mapping";
import { Redirect, useParams } from "react-router-dom";
import Page from "../../components/layout/Page";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import usePatientInputValues from "./usePatientInputValues";
import { makePatientLink } from "../../utils/URLUtils";
import useFetch from "../../hooks/useFetch";
import LoadingBox from "../../components/LoadingBox";
import Snackbar from "../../components/Snackbar";

export default function EditPatient() {
  const { id } = useParams();

  const [feedbackMessage, setFeedbackMessage] = useState("");

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [patientLoadState, patientInputValues] = usePatientInputValues(id);

  const {
    loading: isPatientLoading,
    error: patientLoadError,
  } = patientLoadState;

  const { patientUpdateState, updatePatient } = useFetch(
    async (inputValues) => {
      const patient = valuesToPatient(inputValues);
      return await upPatient(id, patient);
    },
    {
      onSuccess: () =>
        setFeedbackMessage("Patient updated! Redirecting you..."),
      onError: () => setFeedbackMessage("Something went wrong!"),
    },
    [id]
  );

  return (
    <Page title="Edit Patient">
      <ResponsivePaper>
        <LoadingBox loading={isPatientLoading} error={patientLoadError}>
          {patientInputValues && (
            <PatientForm
              initialValues={patientInputValues}
              onSubmit={updatePatient}
            />
          )}
        </LoadingBox>
        <Snackbar
          message={feedbackMessage}
          onClose={() => {
            //Clear the message to close the snackbar
            setFeedbackMessage("");
            if (patientUpdateState.value) {
              setShouldRedirect(true);
            }
          }}
        />
        {shouldRedirect && <Redirect to={makePatientLink(id)} />}
      </ResponsivePaper>
    </Page>
  );
}

import PatientForm from "../../components/forms/PatientForm/Main";
import { updatePatient, getPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import {
  valuesToPatient,
  patientToValues,
} from "../../components/forms/PatientForm/mapping";
import { useParams } from "react-router-dom";
import Loader from "../../components/loaders/Loader";
import PaperPage from "../../components/presentationals/PaperPage";

export default function EditPatient() {
  const { id: patientId } = useParams();

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(values, { setSubmitting }) {
    const patient = valuesToPatient(values);
    try {
      await updatePatient(patientId,patient);
      setSuccess(true);
    } catch (e) {
      console.error(e);
      setFeedbackMessage("Something went wrong!");
      setSubmitting(false);
    }
  }

  return (
    <PaperPage>
      <Loader
        load={async () => await getPatient(patientId)}
        deps={[patientId]}
        render={(patient) => (
          <PatientForm
            initialValues={patientToValues(patient)}
            onSubmit={handleSubmit}
            feedbackMessage={feedbackMessage}
            clearFeedbackMessage={() => setFeedbackMessage("")}
            success={success}
            onSuccessRedirect={{
              pathname: `/patients/${patientId}`,
              state: { message: "Patient updated successfully!" },
            }}
          />
        )}
      />
    </PaperPage>
  );
}

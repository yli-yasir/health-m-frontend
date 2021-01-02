import DeletePatientDialog from "./DeletePatientDialog";
import ProgressButton from "../../../components/inputs/ProgressButton";
import { deletePatient } from "../../../utils/APIUtils";
import React, { useState } from "react";
import HMSnackbar from "../../../components/feedback/HMSnackbar";
import { Redirect } from "react-router-dom";
import { DeleteForeverOutlined } from "@material-ui/icons";

export default function DeletePatientButton({ patientId, confirmationWord }) {
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [deleteSuccess, setDeleteSuccess] = useState("");

  async function requestPatientDelete() {
    setDeleting(true);
    try {
      await deletePatient(patientId);
      setDeleteSuccess(true);
    } catch (e) {
      console.error(e);
      setFeedbackMessage("Something went wrong while deleting this patient!");
      setDeleting(false);
    }
  }
  return (
    <React.Fragment>
      <ProgressButton
        isWorking={isDeleting}
        variant="outlined"
        color='secondary'
        startIcon={<DeleteForeverOutlined></DeleteForeverOutlined>}
        onClick={() => setDeleteDialogOpen(true)}
      >
        Delete Patient
      </ProgressButton>

      <DeletePatientDialog
        open={isDeleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
        }}
        onDelete={() => {
          setDeleteDialogOpen(false);
          requestPatientDelete();
        }}
        confirmationWord={confirmationWord}
      />
      <HMSnackbar
        message={feedbackMessage}
        clearMessage={() => setFeedbackMessage("")}
      />
      {deleteSuccess && (
        <Redirect
          to={{
            pathname: "/search",
            state: { message: "A patient was deleted succesfully!" },
          }}
        />
      )}
    </React.Fragment>
  );
}

import { Box, Fab } from "@material-ui/core";
import DeletePatientDialog from "./DeletePatientDialog";
import ProgressButton from "../../components/inputs/ProgressButton";
import { deletePatient as delPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import Snackbar from "../../components/Snackbar";
import { Redirect } from "react-router-dom";
import { DeleteForeverOutlined } from "@material-ui/icons";
import { SEARCH_PATH } from "../../App/routePaths";
import useFetch from "../../hooks/useFetch";

export default function PatientControls(props) {
  const { _id: id, email } = props.patient;

  const [feedbackMessage, setFeedbackMessage] = useState(false);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const [deletionState, deletePatient] = useFetch(
    async () => await delPatient(id),
    {
      onSuccess: () =>
        setFeedbackMessage("Patient deleted! Redirecting you..."),
      onError: () =>
        setFeedbackMessage("Something went wrong while deleting..."),
    },
    [id]
  );

  const { loading, value: hasDeleted } = deletionState;

  return (
    <Box display="flex" width="100%" flexDirection="row-reverse">
      <ProgressButton
        isWorking={loading}
        variant="outlined"
        color="secondary"
        startIcon={<DeleteForeverOutlined></DeleteForeverOutlined>}
        onClick={() => setIsDeleteDialogOpen(true)}
      >
        Delete Patient
      </ProgressButton>

      <DeletePatientDialog
        open={isDeleteDialogOpen}
        onClose={() => setIsDeleteDialogOpen(false)}
        onDelete={() => {
          setIsDeleteDialogOpen(false);
          deletePatient();
        }}
        confirmationWord={email}
      />

      <Snackbar
        message={feedbackMessage}
        onClose={() => {
          setFeedbackMessage("");
          hasDeleted && setShouldRedirect(true);
        }}
      />

      {shouldRedirect && <Redirect to={SEARCH_PATH} />}
    </Box>
  );
}

import { Box, Fab } from "@material-ui/core";
import DeletePatientDialog from "./DeletePatientDialog";
import ProgressButton from "../../components/inputs/ProgressButton";
import { deletePatient as delPatient } from "../../utils/APIUtils";
import React, { useState } from "react";
import Snackbar from "../../components/Snackbar";
import { Redirect } from "react-router-dom";
import { DeleteForeverOutlined, EditOutlined } from "@material-ui/icons";
import { SEARCH_PATH } from "../../App/routePaths";
import useFetch from "../../hooks/useFetch";
import {Link} from "react-router-dom";
import { makePatientEditLink } from "../../utils/URLUtils";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function PatientControls(props) {
  const classes = useStyles();

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

      <Fab
        className={classes.fab}
        color="primary"
        to={makePatientEditLink(id)}
        component={Link}
      >
        <EditOutlined />
      </Fab>

      <Snackbar
        message={feedbackMessage}
        setMessage={setFeedbackMessage}
        onClose={() => {
          hasDeleted && setShouldRedirect(true);
        }}
      />

      {shouldRedirect && <Redirect to={SEARCH_PATH} />}
    </Box>
  );
}

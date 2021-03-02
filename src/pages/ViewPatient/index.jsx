import ResponsivePaper from "../../components/layout/ResponsivePaper";
import { Typography } from "@material-ui/core";
import { Box, Fab } from "@material-ui/core";
import InfoItem from "../../components/List/ListItem";
import Loader from "../../components/Loader";
import Snackbar from "../../components/Snackbar";
import { getPatient } from "../../utils/APIUtils";
import PatientInfoList from "./PatientInfoList";
import { useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeletePatientButton from "./DeletePatientButton";
import React from "react";
import { EditOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
}));

export default function ViewPatient() {
  const classes = useStyles();
  const location = useLocation();
  const { id: patientId } = useParams();
  const [redirectMessage, setRedirectMessage] = useState(
    location.state ? location.state.message : ""
  );

  return (
    <ResponsivePaper centerContent={true}>
      <Loader
        load={async () => await getPatient(patientId)}
        deps={[patientId]}
        render={(patient) => (
          <React.Fragment>
            <PatientInfoList patient={patient} />
            <Box display="flex" width="100%" flexDirection="row-reverse">
              <DeletePatientButton
                patientId={patient._id}
                confirmationWord={patient.email}
              />
            </Box>
            <Fab className={classes.fab} color="primary"
            to={`/patients/${patient._id}/edit`}
            component={Link}>
              <EditOutlined />
            </Fab>
          </React.Fragment>
        )}
      />

      <Snackbar
        message={redirectMessage}
        clearMessage={() => setRedirectMessage("")}
      />
    </ResponsivePaper>
  );
}

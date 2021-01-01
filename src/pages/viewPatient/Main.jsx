import PaperPage from "../../components/presentationals/PaperPage";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/core";
import InfoItem from "../../components/presentationals/InfoItem";
import Loader from "../../components/containers/Loader";
import HMSnackbar from "../../components/feedback/HMSnackbar";
import { getPatient } from "../../utils/APIUtils";
import PatientInfoList from "./partials/PatientInfoList";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  centerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    <PaperPage className={classes.centerContent}>
      <Loader
        load={async () => await getPatient(patientId)}
        deps={[patientId]}
        render={(patient) => <PatientInfoList patient={patient} />}
      />
      <HMSnackbar
        message={redirectMessage}
        clearMessage={() => setRedirectMessage('')}
      />
    </PaperPage>
  );
}

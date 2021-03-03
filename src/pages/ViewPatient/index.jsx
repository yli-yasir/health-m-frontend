import ResponsivePaper from "../../components/layout/ResponsivePaper";
import { Box, Fab } from "@material-ui/core";
import Snackbar from "../../components/Snackbar";
import { getPatient } from "../../utils/APIUtils";
import PatientInfoList from "./PatientInfoList";
import { useParams, useLocation, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DeletePatientButton from "./DeletePatientButton";
import React from "react";
import { EditOutlined } from "@material-ui/icons";
import { useAsync } from "react-use";
import LoadingBox from "../../components/LoadingBox";
import Page from "../../components/layout/Page";
import boySvg from "../../assets/boy.svg";
import girlSvg from "../../assets/girl.svg";

const useStyles = makeStyles((theme) => ({
  paper: { position: "relative" },
  patientImg: {
    objectFit: "cover",
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
    width:'70%',
    [theme.breakpoints.up("sm")]: {
      position: "absolute",
      right: theme.spacing(3),
      top: theme.spacing(3),
      width: 250,
      height:250
    },
  },
}));

export default function ViewPatient() {
  const classes = useStyles();

  const { id } = useParams();

  const fetchState = useAsync(async () => getPatient(id), [id]);

  const { value: patient, loading, error } = fetchState;

  return (
    <Page title="View Patient">
      <ResponsivePaper className={classes.paper} centerContent={true}>
        <LoadingBox loading={loading} error={error}>
          {patient && (
            <React.Fragment>
              <img
                className={classes.patientImg}
                src={patient.gender === "male" ? boySvg : girlSvg}
              />
              <PatientInfoList patient={patient} />
              <Box display="flex" width="100%" flexDirection="row-reverse">
                <DeletePatientButton
                  patientId={id}
                  confirmationWord={patient.email}
                />
              </Box>
            </React.Fragment>
          )}
        </LoadingBox>
      </ResponsivePaper>
    </Page>
  );
}

{
  /* <Fab color="primary"
            to={`/patients/${patient._id}/edit`}
            component={Link}>
              <EditOutlined />
            </Fab> */
}

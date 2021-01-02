import PaperPage from "../../../components/presentationals/PaperPage";
import { List, Typography, Dialog } from "@material-ui/core";
import {
  PermIdentityOutlined,
  AssignmentOutlined,
  AssessmentOutlined,
  PermPhoneMsgOutlined,
  LocationOnOutlined,
  EmailOutlined,
  EventAvailableOutlined,
  TodayOutlined,
  CakeOutlined,
  PageviewOutlined,
  InvertColorsOffSharp,
  AccountTreeOutlined,
  HealingOutlined,
} from "@material-ui/icons";
import { Box, Button } from "@material-ui/core";
import InfoItem from "../../../components/presentationals/InfoItem";
import { makeStyles } from "@material-ui/core/styles";
import StaticPedigreeChart from "../../../components/pedigreeChart/StaticPedigreeChart";
import { useState } from "react";
import {capitalizeFirstLetter} from '../../../utils/miscUtils';

const useStyles = makeStyles((theme) => ({
  infoList: {
    width: "100%",
  },
}));

export default function PatientInfoList({ patient }) {
  const classes = useStyles();

  const [isPedigreeChartDialogOpen, setPedigreeChartDialogOpen] = useState(
    false
  );

  return (
    <List className={classes.infoList}>
      <InfoItem
        icon={AssignmentOutlined}
        title="Full Name:"
        content={patient.fullName}
      />
      <InfoItem
        icon={PermIdentityOutlined}
        title="Gender:"
        content={patient.gender ? capitalizeFirstLetter(patient.gender) : ''}
      />
      <InfoItem
        icon={CakeOutlined}
        title="Birthdate:"
        content={new Date(patient.birthDate).toDateString()}
      />
      <InfoItem
        icon={AssessmentOutlined}
        title="Weight:"
        content={`${patient.bodyWeight} Kg`}
      />
      <InfoItem
        icon={LocationOnOutlined}
        title="Address:"
        content={patient.address}
      />
      <InfoItem
        icon={PermPhoneMsgOutlined}
        title="Phone:"
        content={patient.phoneNumber}
      />
      <InfoItem icon={EmailOutlined} title="Email:" content={patient.email} />
      <InfoItem
        icon={TodayOutlined}
        title="Admission Date:"
        content={new Date(patient.admissionDate).toDateString()}
      />
      <InfoItem
        icon={EventAvailableOutlined}
        title="Admittor Name:"
        content={patient.admittorName}
      />

      <InfoItem
        icon={PageviewOutlined}
        title="Parent Separation:"
        content={
          patient.parentsSeparated
            ? patient.parentsSeparatedDescription || "Parents are separated."
            : "Parents are not separated."
        }
      />

      {patient.parentsDivorced && (
        <InfoItem
          icon={PageviewOutlined}
          title="Parents Divorce:"
          content={
            patient.parentsDivorced
              ? patient.parentsDivorcedDescription || "Parents are divorced."
              : "Parents are not divorced."
          }
        />
      )}

      <InfoItem
        icon={PageviewOutlined}
        title="Parents Death:"
        content={
          patient.parentsDied
            ? patient.parentsDiedDescription || "Death has occured."
            : "Death has not occured."
        }
      />

      <InfoItem
        icon={PageviewOutlined}
        title="Stepfamily:"
        content={
          patient.stepFamily
            ? patient.stepFamilyDescription || "Stepfamily members exist."
            : "No stepfamily members exist."
        }
      />

      <InfoItem
        icon={AccountTreeOutlined}
        title="Pedigree Chart:"
        content={
          <Button
            variant="outlined"
            onClick={() => setPedigreeChartDialogOpen(true)}
          >
            View Chart
          </Button>
        }
      />

      <Dialog
        open={isPedigreeChartDialogOpen}
        onClose={() => {
          setPedigreeChartDialogOpen(false);
        }}
      >
        <StaticPedigreeChart
          chartData={patient.pedigreeChart}
          failComponent={
            <Box p={2}>
              <Typography variant="subtitle1">Not Available</Typography>
            </Box>
          }
        />
      </Dialog>

      {Object.keys(patient.diagnosisTreatment).map((key) => (
        <InfoItem
          key={key}
          icon={HealingOutlined}
          title={key}
          content={patient.diagnosisTreatment[key] || "No Treatment."}
        />
      ))}
    </List>
  );
}

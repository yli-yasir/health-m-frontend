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
  AccountTreeOutlined,
  HealingOutlined,
} from "@material-ui/icons";
import { List, Button } from "@material-ui/core";
import InfoItem from "../../components/List/InfoItem";
import { makeStyles } from "@material-ui/core/styles";
import { useState, Fragment } from "react";
import StaticPedigreeChartDialog from "../../components/PedigreeChart/StaticPedigreeChartDialog";
import { capitalizeFirstLetter } from "../../utils/stringUtils";

const useStyles = makeStyles((theme) => ({
  infoList: {
    width: "100%",
  },
}));

export default function PatientInfoList(props) {
  const classes = useStyles();

  const [isPedigreeChartDialogOpen, setPedigreeChartDialogOpen] = useState(
    false
  );

  const {
    fullName,
    gender,
    birthDate,
    bodyWeight,
    address,
    phoneNumber,
    email,
    admissionDate,
    admittorName,
    parentsSeparated,
    parentsSeparatedDescription,
    parentsDied,
    parentsDiedDescription,
    parentsDivorced,
    parentsDivorcedDescription,
    stepFamily,
    stepFamilyDescription,
    pedigreeChart,
    diagnosisTreatment,
  } = props.patient;

  return (
    <Fragment>
      <List className={classes.infoList}>
        {/* Not using map because generated InfoItem content prop is not uniform. */}
        <InfoItem
          icon={AssignmentOutlined}
          title="Full Name:"
          content={fullName}
        />

        <InfoItem
          icon={PermIdentityOutlined}
          title="Gender:"
          content={gender ? capitalizeFirstLetter(gender) : ""}
        />

        <InfoItem
          icon={CakeOutlined}
          title="Birthdate:"
          content={new Date(birthDate).toDateString()}
        />

        <InfoItem
          icon={AssessmentOutlined}
          title="Weight:"
          content={`${bodyWeight} Kg`}
        />

        <InfoItem
          icon={LocationOnOutlined}
          title="Address:"
          content={address}
        />

        <InfoItem
          icon={PermPhoneMsgOutlined}
          title="Phone:"
          content={phoneNumber}
        />

        <InfoItem icon={EmailOutlined} title="Email:" content={email} />

        <InfoItem
          icon={TodayOutlined}
          title="Admission Date:"
          content={new Date(admissionDate).toDateString()}
        />

        <InfoItem
          icon={EventAvailableOutlined}
          title="Admittor Name:"
          content={admittorName}
        />

        <InfoItem
          icon={PageviewOutlined}
          title="Parent Separation:"
          content={
            parentsSeparated
              ? parentsSeparatedDescription || "Parents are separated."
              : "Parents are not separated."
          }
        />

        <InfoItem
          icon={PageviewOutlined}
          title="Parents Divorce:"
          content={
            parentsDivorced
              ? parentsDivorcedDescription || "Parents are divorced."
              : "Parents are not divorced."
          }
        />

        <InfoItem
          icon={PageviewOutlined}
          title="Parents Death:"
          content={
            parentsDied
              ? parentsDiedDescription || "Death has occured."
              : "Death has not occured."
          }
        />

        <InfoItem
          icon={PageviewOutlined}
          title="Stepfamily:"
          content={
            stepFamily
              ? stepFamilyDescription || "Stepfamily members exist."
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

        {Object.keys(diagnosisTreatment).map((key) => (
          <InfoItem
            key={key}
            icon={HealingOutlined}
            title={key}
            content={diagnosisTreatment[key] || "No Treatment."}
          />
        ))}
      </List>

      <StaticPedigreeChartDialog
        isOpen={isPedigreeChartDialogOpen}
        onClose={() => {
          setPedigreeChartDialogOpen(false);
        }}
        chartData={pedigreeChart}
      />
    </Fragment>
  );
}

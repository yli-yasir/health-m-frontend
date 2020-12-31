import PaperPage from "../../../components/presentationals/PaperPage";
import { List, Typography } from "@material-ui/core";
import { PermIdentityOutlined,FingerprintOutlined,AssessmentOutlined,PermPhoneMsgOutlined, LocationOnOutlined, EmailOutlined } from "@material-ui/icons";
import {Box} from '@material-ui/core';
import InfoItem from '../../../components/presentationals/InfoItem';

export default function PatientInfoList({patient}) {
  return (
    <List>
      <InfoItem
      icon={FingerprintOutlined}
      title='Full Name:'
      text={patient.fullName}/>
      <InfoItem
      icon={PermIdentityOutlined}
      title='Gender:'
      text={patient.gender}
      />
      <InfoItem
      icon={AssessmentOutlined}
      title='Weight:'
      text={`${patient.bodyWeight} Kg`}
      />
      <InfoItem
      icon={LocationOnOutlined}
      title='Address:'
      text={patient.address}
      />
      <InfoItem
      icon={PermPhoneMsgOutlined}
      title='Phone:'
      text={patient.phoneNumber}
      />
      <InfoItem
      icon={EmailOutlined}
      title='Email:'
      text={patient.email}
      />
      

    </List>
  );
}

import PaperPage from "../../components/presentationals/PaperPage";
import { Typography } from "@material-ui/core";
import { PermIdentityOutlined,FingerprintOutlined,AssessmentOutlined,PermPhoneMsgOutlined, LocationOnOutlined } from "@material-ui/icons";
import {Box} from '@material-ui/core';
import InfoItem from '../../components/presentationals/InfoItem';
import Loader from "../../components/containers/Loader";
import {getPatient} from '../../utils/APIUtils';
import PatientInfoList from "./partials/PatientInfoList";

export default function ViewPatient(props) {
  const patientId = props.match.params.id;
  return (
    <PaperPage>
      <Loader
      load={async ()=>await getPatient(patientId)}
      deps={[patientId]}
      render={(patient)=> (<PatientInfoList patient={patient}/>)}
      />
    </PaperPage>
  )
}

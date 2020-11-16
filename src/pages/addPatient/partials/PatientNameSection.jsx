import HMTextField from '../../../components/HMTextField'
import FormSection from '../../../components/FormSection'

export default function PatientNameSection(props){
    return (
    <FormSection title="Patient Name">

    <HMTextField name="patientFirstName" label="First Name" value={props.firstNameValue} onChange={props.onChange} />

    <HMTextField name="patientLastName" label="Last Name" value={props.lastNameValue} onChange={props.onChange}/>

  </FormSection>
    )
}
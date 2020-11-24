import HMTextField from "../../../components/HMTextField";
import FormSection from "../../../components/FormSection";
import {getTouchedErrorMsg} from '../../../utils';

export default function PatientNameSection({
  values,
  touched,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
}) {

  const firstNameErrorMsg = getTouchedErrorMsg(touched,errors,'patientFirstName');
  const lastNameErrorMsg = getTouchedErrorMsg(touched,errors,'patientLastName');

  return (
    <FormSection title="Patient Name">
      <HMTextField
        name="patientFirstName"
        label="First Name"
        value={values.patientFirstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(firstNameErrorMsg)}
        helperText={firstNameErrorMsg}
      />

      <HMTextField
        name="patientLastName"
        label="Last Name"
        value={values.patientLastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={Boolean(lastNameErrorMsg)}
        helperText={lastNameErrorMsg}
      />
    </FormSection>
  );
}

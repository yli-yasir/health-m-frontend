import AddPatientForm from '../../components/forms/addPatientForm/Main';
import getInitialValues from '../../components/forms/addPatientForm/initialValues'

// Get an object with the initial values.
const initialValues = getInitialValues();

export default function AddPatient() {
  return (
    <AddPatientForm
    initialValues={initialValues}
    onSubmit={()=>{}}
    />
  );
}

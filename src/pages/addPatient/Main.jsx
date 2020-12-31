import AddPatientForm from '../../components/forms/addPatientForm/Main';
import getInitialValues from '../../components/forms/addPatientForm/initialValues'

// Get an object with the initial values.
const initialValues = getInitialValues();

export default function AddPatient() {
  return (
    <AddPatientForm
    initialValues={initialValues}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(true);
      }, 400);
    }}
    />
  );
}

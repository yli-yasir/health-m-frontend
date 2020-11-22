import * as yup from "yup";


export const initialValues={
  patientFirstName: '',
  patientLastName: '',
  patientGender:'male',
  patientBodyWeight:'',
  patientBirthDate:new Date()

};

export const validationSchema = yup.object().shape({
  patientFirstName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  patientLastName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});


export function handleSubmit(values, { setSubmitting }) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}



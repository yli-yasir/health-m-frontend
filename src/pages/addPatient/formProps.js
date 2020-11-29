import * as yup from "yup";

// These keys must be the same as the names of inputs in the form to work with Formik
export const initialValues = {
  patientFirstName: "",
  patientLastName: "",
  patientGender: "male",
  patientBodyWeight: "",
  patientBirthDate: new Date(),
  patientAddress: "",
  patientPhoneNumber: "",
};

// Must have the same keys as inital values to work with Formik
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
  patientGender: yup.string().oneOf(["male", "female"]).required("Required"),
  patientBodyWeight: yup.string().max(3, "Too Long!").required("Required"),
  patientBirthDate: yup.date().max(new Date(),"Invalid Date").required("Required"),
  patientAddress: yup.string().max(500,"Too long!").required("Required"),
  patientPhoneNumber: yup.string().max(15,"Too long!").required("Required")

});

export function handleSubmit(values, { setSubmitting }) {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
}

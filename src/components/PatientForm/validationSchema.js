import * as yup from "yup";

const diagnosisTreatmentSchema = yup
  .object()
  .shape({ diagnosis: yup.string(), treatment: yup.string().max(300) });

// Only perform validation that aids user experience.
// E.g validating a Checkbox seems redundant since it always have a value of true/false
const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: yup.string().email("Invalid Email").required("Required"),
  bodyWeight: yup.string().max(3, "Too Long!").required("Required"),
  address: yup.string().max(100, "Too long!").required("Required"),
  phoneNumber: yup
    .string()
    .transform((val) => val.replace(/[^\d]/g, ""))
    .length(11, "Please enter 11 digits")
    .required("Required"),
  admittorName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too long!")
    .required("Required"),
  parentsSeparatedDescription: yup.string().min(2, "Too Short!").max(500, "Too long!").optional(),
  parentsDivorcedDescription: yup.string().max(500, "Too long!").optional(),
  parentsDiedDescription: yup.string().max(500, "Too long!").optional(),
  stepFamilyDescription: yup.string().max(500, "Too long!").optional(),
  diagnosisTreatment: yup.array().of(diagnosisTreatmentSchema),
  doctorNotes: yup.string().max(10000, "Too long!").required("Required"),
});

export default validationSchema;

export default function getInitialValues() {
  // These keys must be the same as the names of inputs in the form to work with Formik
  const todaysDate = new Date();
  const lastYearsDate = new Date(
    todaysDate.getFullYear() - 1,
    todaysDate.getMonth()
  );

  return {
    fullName: "",
    lastName: "",
    patientGender: "male",
    bodyWeight: "",
    birthDate: lastYearsDate,
    address: "",
    phoneNumber: "",
    pedigreeChart: "",
    admissionDate: todaysDate,
    patientAdmittorName: "",
    parentsSeparated: false,
    parentsSeparatedDescription: "",
    parentsDivorced: false,
    parentsDivorcedDescription: "",
    parentsDied: false,
    parentsDiedDescription: "",
    stepFamily: false,
    stepFamilyDescription: "",
    doctorNotes: "",
    diagnosisTreatment: [{ diagnosis: "", treatment: "" }],
  };
}

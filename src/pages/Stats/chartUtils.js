
export function makeChartData(patients) {

  const { uniqueMedicalCodes, medicalCodeCounts } = _getMedicalCodeData(patients);

  const { medicalCodeColors, medicalCodeBorderColors } = _getMedicalCodeColors(
    uniqueMedicalCodes
  );

  const chartData = uniqueMedicalCodes.length > 0 ?  {
    labels: uniqueMedicalCodes,
    datasets: [
      {
        label: "Patients",
        data: medicalCodeCounts,
        backgroundColor: medicalCodeColors,
        borderColor: medicalCodeBorderColors,
        borderWidth: 1,
      },
    ],
  } :
  blankChartData

  return chartData;
};


// Returns an object which contains
// an array containing unique medical code strings.
// an array containing the count of the medical code with the same index in the first array. 
function _getMedicalCodeData(patients) {
  const uniqueMedicalCodes = [];
  const medicalCodeCounts = [];
  //For each patient
  for (let patientIndex = 0; patientIndex < patients.length; patientIndex++) {
    const patient = patients[patientIndex];
    const patientMedicalCodes = Object.keys(patient.diagnosisTreatment);
    // For each medical code this patient has
    for (let medicalCodeIndex = 0; medicalCodeIndex < patientMedicalCodes.length; medicalCodeIndex++) {
      const medicalCode = patientMedicalCodes[medicalCodeIndex];
      const indexInUnique = uniqueMedicalCodes.indexOf(medicalCode);
      // If this medical code hasn't been added  yet
      if (indexInUnique < 0) {
        uniqueMedicalCodes.push(medicalCode);
        medicalCodeCounts.push(1);
      }
      //If the medical code had already been added before
      else {
        medicalCodeCounts[indexInUnique]++;
      }
    }
  }
  return { uniqueMedicalCodes, medicalCodeCounts }

}

// Returns a an object which contains
// an array of background colors
// an array of border colors
function _getMedicalCodeColors(medicalCodes) {
  const medicalCodeColors = [];
  const medicalCodeBorderColors = [];

  for (let i = 0; i < medicalCodes.length; i++) {
    medicalCodeColors.push(
      `hsla(${360 * (i / medicalCodes.length)},100%,60%,0.2)`
    );
    medicalCodeBorderColors.push(
      `hsl(${360 * (i / medicalCodes.length)},100%,60%,1)`
    );
  }
  return { medicalCodeColors, medicalCodeBorderColors };
}

const blankChartData = {
  labels: ['No Results Found'],
  datasets: [
    {
      label: "No Results Found",
      data: [1],
      backgroundColor: 'hsla(200,100%,60%,0.2)',
      borderColor: 'hsla(200,100%,60%,1)',
      borderWidth: 1,
    },
  ],
}
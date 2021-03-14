
export function makeChartData(patients) {

  const medicalCodeCount = _getMedicalCodeCount(patients);
  const labels = Object.keys(medicalCodeCount);
  const data = Object.values(medicalCodeCount);
  const { medicalCodeColors, medicalCodeBorderColors } = _getMedicalCodeColors(
    labels.length
  );

  const chartData = labels.length > 0 ? {
    labels,
    datasets: [
      {
        label: "Patients",
        data,
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
// medicalCode as a key, and the number of occurences as a value.
// NEED TO IMPROVE READABILITY
function _getMedicalCodeCount(patients) {

  const medicalCodesCount = {};
  //For each patient
  for (let i = 0; i < patients.length; i++) {
    const patientMedicalCodes = Object.keys(patients[i].diagnosisTreatment);
    for (let j = 0; j < patientMedicalCodes.length; j++) {
      const patientMedicalCode = patientMedicalCodes[j];
      const oldCount = medicalCodesCount[patientMedicalCode]
      medicalCodesCount[patientMedicalCode] = oldCount ?
        oldCount + 1 : 1;
    }
  }
  return medicalCodesCount;
}

// Returns a an object which contains
// an array of background colors
// an array of border colors
function _getMedicalCodeColors(colorCount) {
  const medicalCodeColors = [];
  const medicalCodeBorderColors = [];

  for (let i = 0; i < colorCount; i++) {
    medicalCodeColors.push(
      `hsla(${360 * (i / colorCount)},100%,60%,0.2)`
    );
    medicalCodeBorderColors.push(
      `hsl(${360 * (i / colorCount)},100%,60%,1)`
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

export const makeChartData = (patients) => {
  const [addedMedicalCodes, medicalCodeCounts] = _getMedicalCodeData(patients);

  const [backgroundColors, borderColors] = _getMedicalCodeColors(
    addedMedicalCodes
  );
  
  const chartData = addedMedicalCodes.length > 0 ? {
    labels: addedMedicalCodes,
    datasets: [
      {
        label: "Patients",
        data: medicalCodeCounts,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  } : blankChartData;

  return chartData;
};


//Returns a pair
// First element in the pair, is an array containing non-repeated medical codes
// Second element in the pair, is an array containing the count of each medical code
// the data in the first element, correspondsto the one in second element via their indexes
function _getMedicalCodeData(patients) {
  const addedMedicalCodes = [];
  const medicalCodeCounts = [];
  //For each patient
  for (let j = 0; j < patients.length; j++) {
    const patient = patients[j];
    const patientMedicalCodes = Object.keys(patient.diagnosisTreatment);
    if (patientMedicalCodes.length===0){
      patientMedicalCodes.push('No Disorder')
    }
    // For each medical code this patient has
    for (let i = 0; i < patientMedicalCodes.length; i++) {
      const curMedicalCode = patientMedicalCodes[i];
      const indexInAdded = addedMedicalCodes.indexOf(curMedicalCode);
      // If this medical code hasn't been added to the data yet
      if (indexInAdded < 0) {
        addedMedicalCodes.push(curMedicalCode);
        medicalCodeCounts.push(1);
      }
      //If the medical code had already been added before
      else {
        medicalCodeCounts[indexInAdded] = medicalCodeCounts[indexInAdded] + 1;
      }
    }
  }
  return [addedMedicalCodes, medicalCodeCounts];
}

// Returns a pair
// First element in the pair, is an array of background colors
// Second element in the pair, is an array of border colors
// data in both elements corresponds through their indexes
function _getMedicalCodeColors(medicalCodes){
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
      return [medicalCodeColors,medicalCodeBorderColors];
}

const blankChartData= {
  labels: ['No Results Found'],
  datasets: [
    {
      label: "Patients",
      data: [1],
      backgroundColor: ['#000000'],
      borderColor: ['#000000'],
      borderWidth: 1,
    },
  ],
}
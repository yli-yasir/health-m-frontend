import { useEffect, useState } from "react";
import { useAsync } from "react-use";
import { searchPatients } from "../../utils/APIUtils";
import { makeChartData } from "../../utils/chartUtils";

export default function useChartData(filter) {
  const patientsLoadState = useAsync(async () => await searchPatients(), []);

  const { value: patients } = patientsLoadState;

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (patients) {
      const filteredPatients = filterPatients(patients, filter);
      const chartData = makeChartData(filteredPatients);
      setChartData(chartData);
    }
  }, [patients,filter]);

  return [patientsLoadState, chartData];
}

function filterPatients(patients, filter) {
  if (!filter) {
    return patients;
  }

  // A patient matches the filter, if all the values in the
  // patient filter match the ones in patient
  const isPatientMatch = (patient) => {
    const filterKeys = Object.keys(filter);
    const matchingKeys = filterKeys.filter(
      (key) => filter[key] === patient[key]
    );
    return matchingKeys.length === Object.keys(filter).length;
  };

  const filteredPatients = patients.filter((patient) =>
    isPatientMatch(patient)
  );

  return filteredPatients;
}

import { useEffect, useState } from "react";
import { useAsync } from "react-use";
import { searchPatients } from "../../utils/APIUtils";
import { makeChartData } from "./chartUtils";

export default function useChartData(isFilterActive,filter) {
  const patientsLoadState = useAsync(async () => await searchPatients(), []);

  const { value: patients } = patientsLoadState;

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (patients) {
      const basePatients = isFilterActive ?  filterPatients(patients, filter) : patients;
      const chartData = makeChartData(basePatients);
      setChartData(chartData);
    }
  }, [patients,isFilterActive,filter]);

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

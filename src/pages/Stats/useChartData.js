import { useEffect, useState } from "react";
import { useAsync } from "react-use";
import { searchPatients } from "../../utils/APIUtils";
import { makeChartData } from "../../utils/chartUtils";

export default function useChartData() {

  const patientsLoadState = useAsync(async () => await searchPatients(),[]);

  const { value: patients } = patientsLoadState;

  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (patients) {
      setChartData(makeChartData(patients));
    }
  }, [patients]);

  return [patientsLoadState, chartData];
}

import React from "react";
import { Doughnut } from "react-chartjs-2";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import DatasetFilterPanel from "./DatasetFilterPanel";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { searchPatients } from "../../utils/APIUtils";
import Loader from "../../components/Loader";
import { makeChartData } from "../../utils/chartUtils";
import { set } from "date-fns/esm";

export default function StatsPage() {
  const [patients, setPatients] = useState([]);
  const [chartData, setChartData] = useState("");

  const loadData = async () => {
    const patients = await searchPatients();
    setPatients(patients);
    setChartData(makeChartData(patients));
  };

  function filterChartData(patientFilter) {
    if (!patientFilter) {
      setChartData(makeChartData(patients));
      return;
    }

    // A patient matches the filter, if all the values in the
    // patient filter exist in the patient
    const filterMatch = (patient) => {
      const matchingValues = Object.keys(patientFilter).filter(
        key => patientFilter[key] === patient[key]
      );
      return matchingValues.length === Object.keys(patientFilter).length;
    };

    const filteredPatients = patients.filter((patient) => filterMatch(patient));
    setChartData(makeChartData(filteredPatients));
  }

  return (
    <ResponsivePaper centerContent={true}>
      <Loader
        deps={[]}
        load={loadData}
        render={() => (
          <React.Fragment>
            <Doughnut data={chartData} />
            <Box
              display="flex"
              width="100%"
              flexDirection="row-reverse"
              margin={2}
            >
              <DatasetFilterPanel filterDataset={filterChartData} />
            </Box>
          </React.Fragment>
        )}
      />
    </ResponsivePaper>
  );
}

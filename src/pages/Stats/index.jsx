import React from "react";
import { Doughnut } from "react-chartjs-2";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import DatasetFilterPanel from "./DatasetFilterPanel";
import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import { searchPatients } from "../../utils/APIUtils";
import Loader from "../../components/Loader";
import { makeChartData } from "../../utils/chartUtils";
import Page from "../../components/layout/Page";
import { useAsync } from "react-use";
import useChartData from "./useChartData";
import LoadingBox from "../../components/LoadingBox";
import { Fragment } from "react";

export default function StatsPage() {
  const [loadState, chartData] = useChartData();
  const { loading, error } = loadState;
  // function filterChartData(patientFilter) {
  //   if (!patientFilter) {
  //     setChartData(makeChartData(patients));
  //     return;
  //   }

  //   // A patient matches the filter, if all the values in the
  //   // patient filter exist in the patient
  //   const filterMatch = (patient) => {
  //     const matchingValues = Object.keys(patientFilter).filter(
  //       (key) => patientFilter[key] === patient[key]
  //     );
  //     return matchingValues.length === Object.keys(patientFilter).length;
  //   };

  //   const filteredPatients = patients.filter((patient) => filterMatch(patient));
  //   setChartData(makeChartData(filteredPatients));
  // }

  return (
    <Page title="Stats">
      <ResponsivePaper centerContent={true}>
        <LoadingBox loading={loading} error={error}>
          {chartData && (
            <Fragment>
              <Typography variant="h5">Medical Codes</Typography>
              <Doughnut data={chartData} />
            </Fragment>
          )}
        </LoadingBox>
      </ResponsivePaper>
    </Page>
  );
}

import React from "react";
import { Doughnut } from "react-chartjs-2";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import FilterPanel from "./FilterPanel";
import { Typography,Box } from "@material-ui/core";
import { useState } from "react";
import Page from "../../components/layout/Page";
import useChartData from "./useChartData";
import LoadingBox from "../../components/LoadingBox";
import { Fragment } from "react";
import { schema as patientSchema } from "../../models/patient";

export default function StatsPage() {
  const [filter, setFilter] = useState({
    [patientSchema.PARENTS_DIED]: false,
    [patientSchema.PARENTS_DIVORCED]: false,
    [patientSchema.PARENTS_SEPARATED]: false,
    [patientSchema.STEP_FAMILY]: false,
  });

  const [isFilterActive, setIsFilterActive] = useState(false);

  const [fetchState, chartData] = useChartData(isFilterActive, filter);

  const { loading, error } = fetchState;

  return (
    <Page title="Stats">
      <ResponsivePaper centerContent={true}>
        <LoadingBox loading={loading} error={error}>
          {chartData && (
            <Fragment>
              <Typography variant="h5">Medical Codes</Typography>
              <Doughnut data={chartData} />
              <Box display="flex" width="100%" flexDirection="row-reverse">
              <FilterPanel
                filter={filter}
                setFilter={setFilter}
                isFilterActive={isFilterActive}
                setIsFilterActive={setIsFilterActive}
              />
              </Box>
            </Fragment>
          )}
        </LoadingBox>
      </ResponsivePaper>
    </Page>
  );
}

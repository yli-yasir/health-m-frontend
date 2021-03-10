import React from "react";
import { Doughnut } from "react-chartjs-2";
import ResponsivePaper from "../../components/layout/ResponsivePaper";
import FilterPanel from "./FilterPanel";
import { Typography } from "@material-ui/core";
import { useState } from "react";
import Page from "../../components/layout/Page";
import useChartData from "./useChartData";
import LoadingBox from "../../components/LoadingBox";
import { Fragment } from "react";

export default function StatsPage() {
  const [filter, setFilter] = useState({});

  const [fetchState, chartData] = useChartData(filter);

  const { loading, error } = fetchState;

  return (
    <Page title="Stats">
      <ResponsivePaper centerContent={true}>
        <LoadingBox loading={loading} error={error}>
          {chartData && (
            <Fragment>
              <Typography variant="h5">Medical Codes</Typography>
              <Doughnut data={chartData} />
              <FilterPanel />
            </Fragment>
          )}
        </LoadingBox>
      </ResponsivePaper>
    </Page>
  );
}

import { Paper, Button } from "@material-ui/core";
import Formik from "formik";
import React, { useState } from "react";
import HMCheckbox from "../../../components/inputs/HMCheckbox";
import { FilterList, FilterVintage } from "@material-ui/icons";

export default function DatasetFilterPanel({ filterDataset }) {
  const [filterState, setFilterState] = useState({
    parentsDied: false,
    parentsSeparated: false,
    parentsDivorced: false,
    stepFamily: false,
  });

  const [ filterActive, setFilterActive ] = useState(false);

  const handleFilterStateChange = (e) => {
    setFilterState({
      ...filterState,
      [e.target.name]: !filterState[e.target.name],
    });
  };

  const makeProps = (label, name) => ({
    name,
    label,
    checked: filterState[name],
    onChange: handleFilterStateChange,
  });

  return (
    <Paper variant="outlined">
      <HMCheckbox {...makeProps("Parents Death", "parentsDied")} />
      <HMCheckbox {...makeProps("Parents Separation", "parentsSeparated")} />
      <HMCheckbox {...makeProps("Parents Divorce", "parentsDivorced")} />
      <HMCheckbox {...makeProps("Stepfamily", "stepFamily")} />
      <Button
        variant="contained"
        color={filterActive ? "primary" : "secondary"}
        startIcon={<FilterList />}
        onClick={() => setFilterActive(!filterActive)}
      >
        {filterActive ? "ON" : "OFF"}
      </Button>
    </Paper>
  );
}

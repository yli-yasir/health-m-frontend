import { Paper, Button,Box } from "@material-ui/core";
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

  const enableFilter = ()=>{
    setFilterActive(true);
    filterDataset(filterState);
  }
  
  const disableFilter = ()=>{
    setFilterActive(false);
    filterDataset(null);
  }

  const handleFilterStateChange = (e) => {
    const filter = {
      ...filterState,
      [e.target.name]: !filterState[e.target.name],
    };
    filterDataset(filter);
    setFilterState(filter);
  };

  const makeProps = (label, name) => ({
    name,
    label,
    checked: filterState[name],
    onChange: handleFilterStateChange,
    disabled: filterActive? false: true
  });

  return (
    <Paper variant="outlined">
      <Box p={2}>
      <HMCheckbox {...makeProps("Parents Death", "parentsDied")} />
      <HMCheckbox {...makeProps("Parents Separation", "parentsSeparated")} />
      <HMCheckbox {...makeProps("Parents Divorce", "parentsDivorced")} />
      <HMCheckbox {...makeProps("Stepfamily", "stepFamily")} />
      <Button
        variant="contained"
        color={filterActive ? "primary" : "secondary"}
        startIcon={<FilterList />}
        onClick={filterActive? disableFilter : enableFilter}
      >
        {filterActive ? "ON" : "OFF"}
      </Button>
      </Box>
    </Paper>
  );
}

import { Paper, Button, Box } from "@material-ui/core";
import React, { useState } from "react";
import HMCheckbox from "../../components/inputs/Checkbox";
import { FilterList } from "@material-ui/icons";
import { schema as patientSchema } from "../../models/patient";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  filterButton: {
    marginTop: theme.spacing(2)
  }
}))

const checkboxes = [
  { label: "Parents Death", name: patientSchema.PARENTS_DIED },
  { label: "Parents Separation", name: patientSchema.PARENTS_SEPARATED },
  { label: "Parents Divorce", name: patientSchema.PARENTS_DIVORCED },
  { label: "Stepfamily", name: patientSchema.STEP_FAMILY },
];

export default function DatasetFilterPanel(props) {

  const classes = useStyles();

  const { filter, setFilter, isFilterActive, setIsFilterActive } = props;

  const handleCheckboxChange = (e) => {
    const newFilter = {
      ...filter,
      [e.target.name]: !filter[e.target.name],
    };
    setFilter(newFilter);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      {checkboxes.map(({ name, label }) => (
        <HMCheckbox
          key={name}
          name={name}
          label={label}
          checked={filter[name]}
          onChange={handleCheckboxChange}
          disabled={!isFilterActive}
        />
      ))}
      <Button
        className={classes.filterButton}
        variant="contained"
        color={isFilterActive ? "primary" : "secondary"}
        startIcon={<FilterList />}
        onClick={() => setIsFilterActive(!isFilterActive)}
      >
        {isFilterActive ? "ON" : "OFF"}
      </Button>
    </Paper>
  );
}

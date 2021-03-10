import { Paper, Button, Box } from "@material-ui/core";
import React from "react";
import HMCheckbox from "../../components/inputs/Checkbox";
import { FilterList } from "@material-ui/icons";
import { schema as patientSchema } from "../../models/patient";

const {
  PARENTS_DIED,
  PARENTS_DIVORCED,
  PARENTS_SEPARATED,
  STEP_FAMILY,
} = patientSchema;

const checkboxes = [
  { label: "Parents Death", name: PARENTS_DIED },
  { label: "Parents Separation", name: PARENTS_SEPARATED },
  { label: "Parents Divorce", name: PARENTS_DIVORCED },
  { label: "Stepfamily", name: STEP_FAMILY },
];

export default function DatasetFilterPanel(props) {
  const { isFilterActive, setIsFilterActive, filter, setFilter } = props;

  const handleCheckboxChange = (e) => {
    const newFilter = {
      ...filter,
      [e.target.name]: !filter[e.target.name],
    };
    setFilter(newFilter);
  };

  return (
    <Paper variant="outlined">
      <Box p={2}>
        {checkboxes.map(({ name, label }) => (
          <HMCheckbox
            name={name}
            label={label}
            checked={filter[name]}
            onChange={handleCheckboxChange}
            disabled={!isFilterActive}
          />
        ))}
        <Button
          variant="contained"
          color={isFilterActive ? "primary" : "secondary"}
          startIcon={<FilterList />}
          onClick={() => setIsFilterActive(!isFilterActive)}
        >
          {isFilterActive ? "ON" : "OFF"}
        </Button>
      </Box>
    </Paper>
  );
}

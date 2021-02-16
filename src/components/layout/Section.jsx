import React from "react";
import { Typography } from "@material-ui/core";
import SimpleDivider from "../SimpleDivider";

export default function FormSection(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      {props.children}
      <SimpleDivider />
    </React.Fragment>
  );
}

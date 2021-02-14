import React from 'react';
import { Typography } from "@material-ui/core";
import HMDivider from "../layout/HMDivider";

export default function FormSection(props) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        {props.title}
      </Typography>
      {props.children}
      <HMDivider></HMDivider>
    </React.Fragment>
  );
}

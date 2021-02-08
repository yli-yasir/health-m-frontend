import { TextField as MaterialTextField } from "@material-ui/core";
import React from 'react';

const TextField = React.forwardRef((props, ref) => {
  return (
    <MaterialTextField
      ref={ref}
      variant="outlined"
      color="secondary"
      fullWidth={true}
      margin="normal"
      autoComplete="off"
      {...props}
    />
  );
});

export default TextField;

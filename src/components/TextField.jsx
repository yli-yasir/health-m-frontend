import { TextField as MaterialTextField } from "@material-ui/core";
import { useEffect } from "react";
function TextField(props) {
  return (
    <MaterialTextField
      variant="outlined"
      color="secondary"
      fullWidth={true}
      margin="normal"
      autoComplete="off"
      {...props}
    />
  );
}

export default TextField;

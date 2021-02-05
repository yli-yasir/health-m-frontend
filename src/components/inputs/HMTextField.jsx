import { TextField } from "@material-ui/core";
import { useEffect } from "react";
function HMTextField(props) {
  return (
    <TextField
      variant="outlined"
      color="secondary"
      fullWidth={true}
      margin="normal"
      autoComplete="off"
      {...props}
    />
  );
}

export default HMTextField;

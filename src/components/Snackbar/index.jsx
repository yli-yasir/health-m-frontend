import { Snackbar as MaterialSnackbar } from "@material-ui/core";

export default function Snackbar(props) {
  return (
    <MaterialSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(props.message)}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        //This function should set the message to a falsy value
        // to close the snackbar
        props.onClose();
      }}
      message={props.message}
      autoHideDuration={3000}
    />
  );
}

import { Snackbar as MaterialSnackbar } from "@material-ui/core";

export default function Snackbar(props) {
  const { message, duration, onClose, ...otherProps } = props;
  return (
    <MaterialSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(message)}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        //This function should set the message to a falsy value
        // to close the snackbar
        onClose();
      }}
      message={message}
      autoHideDuration={duration || 3000}
      {...otherProps}
    />
  );
}

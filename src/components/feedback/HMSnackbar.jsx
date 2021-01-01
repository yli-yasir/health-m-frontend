import { Snackbar } from "@material-ui/core";
export default function HMSnackbar({ message, clearMessage }) {
  console.log(message);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(message)}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        clearMessage();
      }}
      message={message}
      autoHideDuration={6000}
    />
  );
}

import { Snackbar as MaterialSnackbar } from "@material-ui/core";

export default function Snackbar(props) {
  const { message,setMessage, autoHideDuration, onClose, ...otherProps } = props;
  return (
    <MaterialSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={Boolean(message)}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setMessage('');
        onClose && onClose();
      }}
      message={message}
      autoHideDuration={autoHideDuration || 3000}
      {...otherProps}
    />
  );
}

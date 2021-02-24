import { Snackbar as MaterialSnackbar } from "@material-ui/core";

export default function Snackbar({open,setOpen,message }) {
  return (
    <MaterialSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      open={open}
      onClose={(event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      }}
      message={message}
      autoHideDuration={3000}
    />
  );
}

import TextField from "../../components/inputs/TextField";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import {useState} from 'react';

export default function DeletePatientDialog({
  open,
  onClose,
  onDelete,
  confirmationWord
}) {
  
  const [enteredConfirmationWord, setEnteredConfirmationWord] = useState("");

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please confirm that you would like to delete this patient by entering <b>{confirmationWord}</b>
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Patient Email Address"
          type="email"
          fullWidth
          value={enteredConfirmationWord}
          onChange={(e)=> setEnteredConfirmationWord(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button disabled={enteredConfirmationWord!==confirmationWord} onClick={onDelete} color="primary">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

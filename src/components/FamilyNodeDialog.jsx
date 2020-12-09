import { useState, useEffect } from "react";
import HMRadioGroup from "./HMRadioGroup";
import HMTextField from "./HMTextField";
import { makeStyles } from "@material-ui/core/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@material-ui/core";

export default function FamilyNodeDialog(props) {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  useEffect(()=>{
    return function(){
      console.log('unmount family node dialog')
    }
  },[])
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      onEnter={()=> {
        setName('');
        setGender("male")
      }}
    >
      <DialogTitle id="form-dialog-title">Create Family Node</DialogTitle>

      <DialogContent>
        <HMRadioGroup
          label="Gender"
          name="gender"
          value={gender}
          name="patientGenderDialog"
          onChange={(e) => setGender(e.target.value)}
          radios={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />

        <HMTextField
          name="patientName"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={props.onClose} color="primary">
          Cancel
        </Button>

        <Button
          onClick={(e) => {
            props.onConfirm(name, gender);
            props.onClose();
          }}
          color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

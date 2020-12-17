import { useState, useEffect } from "react";
import HMRadioGroup from "./HMRadioGroup";
import HMTextField from "./HMTextField";
import { makeStyles } from "@material-ui/core/styles";
import {Formik} from 'formik'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

export default function FamilyNodeDialog(props) {

  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");


  return (
    <Dialog
      open={props.isOpen}
      onClose={props.onClose}
      onEnter={()=> {
        setName('');
        setGender("male")
      }}
    >
      <DialogTitle id="form-dialog-title">Add Family Member</DialogTitle>

      <DialogContent>
      <DialogContentText>
            Please fill the following information to add a new family member.
      </DialogContentText>
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

import React, { useState } from "react";
import Checkbox from "./Checkbox";
import TextField from "./TextField";

export default function CheckboxedText(props) {
  return (
    <React.Fragment>
      <Checkbox
        name={props.checkboxName}
        checked={props.isChecked}
        onChange={props.onCheckboxChange}
        label={props.checkboxLabel}
      />
        
        {props.isChecked && (
        <TextField
          value={props.textFieldValue}
          label={props.checkboxLabel + " Description"}
          onChange={props.onTextFieldChange}
          onBlur={props.onBlur}
          name={props.textFieldName}
          error={Boolean(props.textFieldError)}
          helperText={props.textFieldError}
          multiline
          rows={4}
        />
      )}
    
    </React.Fragment>
  );
}

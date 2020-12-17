import React, { useState } from "react";
import HMCheckbox from "./HMCheckbox";
import HMTextField from "./HMTextField";

export default function CheckboxedText(props) {
  return (
    <React.Fragment>
      <HMCheckbox
        name={props.checkboxName}
        checked={props.isChecked}
        onChange={props.onCheckboxChange}
        label={props.checkboxLabel}
      />

      {props.isChecked && (
        <HMTextField
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

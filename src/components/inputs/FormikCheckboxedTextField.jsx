import React, { useState } from "react";
import CheckboxedTextField from "./CheckboxedTextField";

//formikBag must contain
// { values, errors, onChange, onBlur, setFieldValue }
export default function FormikCheckboxedText(props) {
  const { checkboxName, textFieldName, formikBag, ...otherProps } = props;
  const { values, errors, onChange, onBlur, setFieldValue } = formikBag;
  return (
    <CheckboxedTextField
      checkboxName={checkboxName}
      textFieldName={textFieldName}
      isChecked={values[checkboxName]}
      textFieldValue={values[textFieldName]}
      onCheckboxChange={(e) => {
        setFieldValue(checkboxName, e.target.checked);
        setFieldValue(textFieldName, "");
      }}
      onTextFieldChange={onChange}
      onBlur={onBlur}
      textFieldError={errors[textFieldName]}
      {...otherProps}
    />
  );
}

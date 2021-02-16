// Bind formikBag to Material-UI input props.
// A formik bag looks like the following :
//{ values,
//  errors,
//  onBlur,
//  onChange}
export function formikToMaterialProps(formikBag, inputName) {
  const { values, errors, onChange, onBlur } = formikBag;
  return {
    name: inputName,
    value: values[inputName],
    onChange,
    onBlur,
    error: Boolean(errors[inputName]),
    helperText: errors[inputName],
  };
}

export function getTouchedErrors(touched, errors) {
  const touchedErrors = {};

  for (const [key, value] of Object.entries(errors)) {
    if (touched[key] && errors[key]) {
      touchedErrors[key] = value;
    }
  }
  return touchedErrors;
}

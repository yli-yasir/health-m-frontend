export function getTouchedErrors(touched, errors) {
  const touchedErrors = {};

  for (const [key, value] of Object.entries(errors)) {
    if (touched[key] && errors[key]) {
      touchedErrors[key] = value;
    }
  }
  return touchedErrors;
}

export function getElementWithError(errors){
  const elemName = Object.keys(errors)[0];
  console.log(elemName);
  return document.getElementsByName(elemName)[0];
}


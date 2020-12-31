
export function getTouchedErrors(touched,errors){

    const touchedErrors = {};

    for (const [key,value] of Object.entries(errors)){
        if (touched[key] && errors[key]){
          touchedErrors[key] = value;
        }
      }
      return touchedErrors;
}




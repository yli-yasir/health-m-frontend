


export function validate(values){
    const errors = {};
    return errors;
}



export function handleSubmit(values,{setSubmitting}){
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
}
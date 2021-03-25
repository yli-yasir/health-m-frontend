import TextField from "./TextField";
// formikBag prop must contain
// {values,errors,onChange,onBlur}
export default function FormikTextField(props) {
  const { name, formikBag,defaultHelperText, ...otherProps } = props;
  const { values, errors, onChange, onBlur } = formikBag;
  return (
    <TextField
      name={name}
      value={values[name]}
      error={Boolean(errors[name])}
      helperText={errors[name] || defaultHelperText}
      onChange={onChange}
      onBlur={onBlur}
      {...otherProps}
    />
  );
}

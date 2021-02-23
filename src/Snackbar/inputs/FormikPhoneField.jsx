import PhoneField from "./PhoneField";
// formikBag must contain
// {values,errors,onChange,onBlur}
export default function FormikPhoneField(props) {
  const { name, formikBag, ...otherProps } = props;
  const { values, errors, onChange, onBlur } = formikBag;
  return (
    <PhoneField
      name={name}
      value={values[name]}
      error={Boolean(errors[name])}
      helperText={errors[name]}
      onChange={onChange}
      onBlur={onBlur}
      {...otherProps}
    />
  );
}

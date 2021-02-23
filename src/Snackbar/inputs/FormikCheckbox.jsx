import Checkbox from "./Checkbox";

//formikBag must contain
//{onChange,onBlur,errors,values}
function FormikCheckBox(props) {
  const { name, formikBag, ...otherProps } = props;
  const { onChange, onBlur, values, errors } = formikBag;
  return (
    <Checkbox
      name={name}
      checked={values[name]}
      error={Boolean(errors[name])}
      onChange={onChange}
      onBlur={onBlur}
      {...otherProps}
    />
  );
}

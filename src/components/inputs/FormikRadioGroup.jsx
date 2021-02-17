import RadioGroup from "./RadioGroup";

//formikBag must contain
// {values, onBlur, onChange}
export default function FormikRadioGroup(props) {
  const { name, formikBag, ...otherProps } = props;
  const { values, onBlur, onChange } = formikBag;
  return (
    <RadioGroup
      name={name}
      value={values[name]}
      onChange={onChange}
      onBlur={onBlur}
      {...otherProps}
    />
  );
}

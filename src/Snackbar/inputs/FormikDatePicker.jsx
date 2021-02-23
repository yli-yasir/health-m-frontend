import DatePicker from "./DatePicker";

//formikBag must contain
// {values,onBlur, setFieldValue}
export default function FormikDatePicker(props) {
  const { name, formikBag, ...otherProps } = props;
  const {values,onBlur, setFieldValue } = formikBag;

  return (
    <DatePicker
      name={name}
      value={values[name]}
      onChange={(date) => setFieldValue(name, date)}
      onBlur={onBlur}
      {...otherProps}
    />
  );
}

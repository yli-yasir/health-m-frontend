import FormSection from "../../../presentationals/FormSection";
import CheckboxedTextField from "../../../inputs/CheckboxedTextField";

export default function FamilySection({
  values,
  errors,
  onBlur: handleBlur,
  onChange: handleChange,
  setFieldValue,
}) {

  function makeProps(label, checkboxName, textFieldName) {
    return {
      checkboxLabel: label,
      checkboxName,
      textFieldName,
      isChecked: values[checkboxName],
      textFieldValue: values[textFieldName],
      onCheckboxChange: (e) => {
        setFieldValue(checkboxName, e.target.checked);
        setFieldValue(textFieldName, "");
      },
      onTextFieldChange: handleChange,
      onBlur: handleBlur,
      textFieldError: Boolean(errors[textFieldName]),
      helperText: errors[textFieldName],
    };
  }

  return (
    <FormSection title="Family Info.">
      <CheckboxedTextField
        {...makeProps(
          "Parents Separation",
          "parentsSeparated",
          "parentsSeparatedDescription"
        )}
      />

      <CheckboxedTextField
        {...makeProps(
          "Parents Divorce",
          "parentsDivorced",
          "parentsDivorcedDescription"
        )}
      />

      <CheckboxedTextField
        {...makeProps(
          "Parents Died",
          "parentsDied",
          "parentsDiedDescription"
        )}
      />

      <CheckboxedTextField
        {...makeProps(
          "Step Family",
          "stepFamily",
          "stepFamilyDescription"
        )}
      />


    </FormSection>
  );
}

import React,{Fragment} from "react";
import { Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { getElementWithError, getTouchedErrors } from "../../utils/formikUtils";
import sections from "./sections";
import validationSchema from "./validationSchema";
import ProgressButton from "../inputs/ProgressButton";

export default function PatientFormContainer(props) {
  const {
    initialValues,
    onSubmit
  } = props;

  return (
    <Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {renderPatientForm}
      </Formik>
    </Fragment>
  );
}

function renderPatientForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
  isValid,
}) {
  const formikBag = {
    values,
    errors: getTouchedErrors(touched, errors),
    onChange: handleChange,
    onBlur: handleBlur,
    setFieldValue,
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      {/* Shouldn't use inline CSS / not Scalable etc. */}
      <form
      style={{width:"100%"}}
        onSubmit={(e) => {
          e.preventDefault();
          if (!isValid) {
            return getElementWithError(errors).focus();
          }
          handleSubmit();
        }}
      >
        {sections.map((Section) => (
          <Section key={Section.name} formikBag={formikBag} />
        ))}
        <ProgressButton
          type="submit"
          color="primary"
          variant="contained"
          isWorking={isSubmitting}
        >
          Submit
        </ProgressButton>
      </form>
    </MuiPickersUtilsProvider>
  );
}

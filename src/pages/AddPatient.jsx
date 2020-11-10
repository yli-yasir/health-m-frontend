import React from "react";
import { Formik } from "formik";
import { InputAdornment, Paper, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import HMTextField from "../components/HMTextField";
import HMRadioGroup from "../components/HMRadioGroup";
import FormSection from "../components/FormSection";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import HMDatePicker from "../components/HMDatePicker";
import HMCheckBox from "../components/HMCheckBox";
import HMSelect from "../components/HMSelect";
import PedigreeChart from "../components/PedigreeChart";

const useStyles = makeStyles((theme) => ({}));

export default function addPatient() {
  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Formik initialValues={{ email: "", password: "" }}>
          {FormikForm}
        </Formik>
      </Box>
    </Paper>
  );
}

function FormikForm({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) {
  //const classes = useStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit}>
        <FormSection title="Patient Name">
          <HMTextField id="first-name" label="First Name" />
          <HMTextField id="last-name" label="Last Name" />
        </FormSection>

        <FormSection title="Body Info.">
          <HMRadioGroup
            label="Gender"
            name="gender"
            value="male"
            radios={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
          <HMTextField
            id="body-weight"
            label="Body Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
        </FormSection>

        <FormSection title="Contact Info.">
          <HMTextField id="phone-number" label="Phone Number" />

          <HMTextField id="address" label="Address" />
        </FormSection>

        <FormSection title="Patient Admission">
          <HMDatePicker label="Admission date" />
          <HMTextField id="brought-by" label="Patient Brought By" />
        </FormSection>

        <FormSection title="Family">
          <HMCheckBox label="Separation" />
          <HMCheckBox label="Divorce" />
          <HMCheckBox label="Death" />
          <HMCheckBox label="Stepfamily" />
          <HMCheckBox label="Are parents related? ( to each other? or to child?)" />
        </FormSection>

        <PersonFormSection title="Mother Info." />
        <PersonFormSection title="Father Info." />

        <FormSection title="Siblings" />

        <FormSection title="Development History" />

        <FormSection title="A- Prenatal">
          <HMCheckBox label="Planned Child" />
          <HMSelect
            label="Expected Gender"
            items={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "none", label: "None" },
            ]}
          />

          <HMSelect
            label="Gestiation Period"
            items={[
              { value: "term", label: "Term Delivery" },
              { value: "premature", label: "Premature Delivery" },
              { value: "postmature", label: "Postmature Delivery" },
            ]}
          />

          <HMTextField label="Pregnancy Problems" multiline rows={4} />
        </FormSection>

        <FormSection title="B- Natal">
          <HMSelect
            label="Way of delivery"
            items={[
              { value: "nsvb", label: "NSVB" },
              { value: "c-section", label: "C-Section" },
              { value: "assisted", label: "Assisted Delivery" },
            ]}
          />
          <HMTextField label="Complications" multiline rows={4} />
          <HMTextField
            id="natal-body-weight"
            label="Body Weight"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Kg</InputAdornment>
              ),
            }}
          />
          <HMTextField label="Naming" multiline rows={4} />
        </FormSection>

        <FormSection title="C- Motor Development">
          <Typography>1. Gross Motor Development</Typography>
          <MotorDevMonthSelect label="Hold head up"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Sit with support"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Sit without support"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Crawl"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Walk"></MotorDevMonthSelect>

          <Typography>2. Fine Motor coordination</Typography>
          <MotorDevMonthSelect label="Pass object from one hand to other"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Pincer Grasp"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Falling / Dropping Objects from hand"></MotorDevMonthSelect>

          <Typography>3. Speech and language development</Typography>
          <MotorDevMonthSelect label="Grip with hand"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Pass object from one hand to other"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Pincer Grasp"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Falling / Dropping Objects from hand"></MotorDevMonthSelect>
        </FormSection>

        <FormSection title="D- Speech and Language development">
          <MotorDevMonthSelect label="Understand Language"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Understand and follow instructions"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Finger pointing"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Make sounds"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="Imitate sounds"></MotorDevMonthSelect>
          <MotorDevMonthSelect label="First words"></MotorDevMonthSelect>
          <HMTextField
            id="num-of-words"
            label="Number of words"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Around</InputAdornment>
              ),
            }}
          />
          <MotorDevMonthSelect label="Form Sentences"></MotorDevMonthSelect>
          <HMTextField label="Speech problems" multiline rows={4} />
        </FormSection>

        <FormSection title="E- Potty Training">
          <MotorDevMonthSelect label="Potty Training"></MotorDevMonthSelect>
        </FormSection>

        <FormSection title="F- Nutrition">
          <HMCheckBox label="Breast Fed" />
          <MotorDevMonthSelect label="Breast Fed"></MotorDevMonthSelect>

          <HMCheckBox label="Bottle Fed" />
          <MotorDevMonthSelect label="Bottle Fed"></MotorDevMonthSelect>

          <HMCheckBox label="Pacifier" />
          <MotorDevMonthSelect label="Pacifier"></MotorDevMonthSelect>

          <MotorDevMonthSelect label="Complementary Feeding"></MotorDevMonthSelect>

          <HMCheckBox label="Feeding Problems" />
          <HMTextField label="Feeding Problems" multiline rows={4} />

          <HMCheckBox label="Allergies" />
          <HMTextField label="Allergies" multiline rows={4} />
        </FormSection>

        <FormSection title="G- Sleep pattern">
          <HMCheckBox label="Problems falling asleep" />
          <HMTextField label="Problems falling asleep" multiline rows={4} />

          <HMCheckBox label="Sleeping on their own" />
          <HMTextField label="Sleeping on their own" multiline rows={4} />

          <HMTextField label="Sleep hours" />
        </FormSection>

        <FormSection title="H- Adjustment and social skills">
          <MotorDevMonthSelect label="Age recognizing mother"></MotorDevMonthSelect>

          <MotorDevMonthSelect label="Social smile"></MotorDevMonthSelect>

          <MotorDevMonthSelect label="Stranger Anxiety"></MotorDevMonthSelect>

          <MotorDevMonthSelect label="Seperation anxiety"></MotorDevMonthSelect>

          <MotorDevMonthSelect label="Use tools"></MotorDevMonthSelect>
        </FormSection>

        <FormSection title="Caregivers">
          <HMTextField label="0-1 years" multiline rows={4} />
          <HMTextField label="1-3 years" multiline rows={4} />
          <HMTextField label="3-6 years" multiline rows={4} />

          <HMTextField label="Seperation" multiline rows={4} />
        </FormSection>

        <FormSection title="School">
          <HMTextField label="Age starting school" multiline rows={4} />

          <HMSelect
            label="Reading"
            items={[
              { value: "preschool", label: "preschool" },
              { value: "primaryschool", label: "primary school" },
              { value: "later", label: "Later" },
              { value: "cantread", label: "Can not read" },
            ]}
          />
        </FormSection>

        <FormSection title="Adolscence">
          <HMTextField label="Age of entry" rows={4} />
          <HMTextField label="Age of menarchy" rows={4} />
          <HMTextField label="problems" multiline rows={4} />
        </FormSection>

        <FormSection title="Social History">
          <HMSelect
            label="Peer relationships"
            items={[
              { value: "very good", label: "very good " },
              { value: "good", label: "good" },
              { value: "poor", label: "poor" },
            ]}
          />

          <Typography>Family relationships</Typography>

          <HMTextField label="Mom-dad relationship" rows={4} />
          <HMTextField label="Mom attitude and relationship" rows={4} />
          <HMTextField
            label="Dad attitude and relationship"
            multiline
            rows={4}
          />
          <HMTextField label="Siblings relationship" multiline rows={4} />
          
          <HMTextField label="Extraccurricular activities" multiline rows={4} />

          </FormSection>


          <FormSection title="Patient Medical History">
          <HMTextField label="Regularly used medications" multiline rows={4} />
          <HMTextField label="Past medical licenses" multiline rows={4} />
          <HMTextField label="Hospital Admissions" multiline rows={4} />

          </FormSection>


          <FormSection title="Family Medical History">
          <HMTextField label="Medical History (consider using ICD10codes, was in bold)" multiline rows={4} />
          <HMTextField label="Family psyhciatric history" multiline rows={4} />
          </FormSection>


          <FormSection title="Premorbid history">
          <HMTextField label="Family" multiline rows={4} />
          <HMTextField label="Peers" multiline rows={4} />
          <HMTextField label="School" multiline rows={4} />
          </FormSection>

          <FormSection title="Mental state examination">
          <HMTextField label="Mental state examination" multiline rows={4} />

          </FormSection>

      </form>
    </MuiPickersUtilsProvider>
  );
}

// Avoided naming it parent intentionally
function PersonFormSection(props) {
  const ageSelectDataset = [...Array(150).keys()].map((num) => ({
    value: num + 1,
    label: num + 1,
  }));

  const educationSelectDataset = [
    { value: "Other", label: "Other" },
    { value: "Highschool", label: "Highschool" },
    { value: "undergraduate", label: "Undergraduate" },
    { value: "graduate", label: "Graduate" },
  ];

  return (
    <FormSection title={props.title}>
      <HMTextField label="Name" />

      <HMSelect label="Age" items={ageSelectDataset} />

      <HMSelect label="Education" items={educationSelectDataset} />

      <HMTextField label="Occupation"></HMTextField>

      <HMTextField label="Health History" multiline rows={4}>
        {" "}
      </HMTextField>
    </FormSection>
  );
}

function MotorDevMonthSelect(props) {
  const dataset = [...Array(36).keys()].map((num) => ({
    value: num + 1,
    label: num + 1 + " Months",
  }));
  return <HMSelect label={props.label} items={dataset}></HMSelect>;
}

import { useEffect, useState } from "react";
import { getPatient } from "../../utils/APIUtils";
import { patientToValues } from "../../components/PatientForm/mapping";
import { useAsync } from "react-use";

export default function usePatientValues(id) {
  const patientLoadState = useAsync(async () => await getPatient(id), [id]);
  const [patientInputValues, setPatientInputValues] = useState();

  useEffect(() => {
    let patient = patientLoadState.value;
    if (patient) {
      setPatientInputValues(patientToValues(patient));
    }
  }, [patientLoadState.value]);

  return [patientLoadState, patientInputValues];
}

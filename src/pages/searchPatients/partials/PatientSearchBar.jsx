import SearchBar from "../../../components/SearchBar";
import { searchPatients } from "../../../utils/mockAPIUtils";
import { useState } from "react";
export default function PatientSearchBar() {
  const [text, setText] = useState('');

  return (
    <SearchBar
      text={text}
      onTextChange={(e) => setText(e.target.value)}
      getSuggestions={getSuggestions}
      getSuggestionValue={getSuggestionValue}
    />
  );
}

async function getSuggestions() {
  return await searchPatients();
}

function getSuggestionValue(patient) {
  return patient.firstName + ' ' +  patient.lastName;
}

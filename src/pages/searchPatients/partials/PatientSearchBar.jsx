import SearchBar from "../../../components/inputs/SearchBar";
import { searchPatients } from "../../../utils/APIUtils";
import { useState } from "react";
import { buildQueryString } from "../../../utils/URLUtils";

export default function PatientSearchBar() {
  const [text, setText] = useState('');

  return (
    <SearchBar
      text={text}
      onTextChange={(e,{newValue}) => setText(newValue)}
      getSuggestions={async (searchTerm)=> await searchPatients(searchTerm,5,1)}
      getSuggestionValue={(patient)=>patient.fullName}
      makeSearchLink={(suggestedSearchTerm)=> ({
        pathname:'/patients',
        search: buildQueryString('',{q:suggestedSearchTerm})
      })}
    />
  );
}


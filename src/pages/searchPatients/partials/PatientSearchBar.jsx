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
      getSuggestions={getSuggestions}
      getSuggestionValue={(patient)=>patient.fullName}
      makeSearchLink={(searchTerm)=> ({
        pathname:'/search',
        search: buildQueryString('',{q:searchTerm})
      })}
    />
  );
}

async function getSuggestions() {
  return await searchPatients(5,1);
}


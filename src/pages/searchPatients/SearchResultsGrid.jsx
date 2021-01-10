import PatientCard from "./PatientCard";
import SearchResultStatus from "./SearchResultStatus";
import {Box} from '@material-ui/core';

export default function SearchResultsContainer({ results}) {
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='center'>
      {results.map((patient) => (
        <PatientCard 
        key={patient._id}
        patient={patient}
        />
      ))}
    </Box>
  );
}

import PatientSearchBar from "./partials/PatientSearchBar";
import SearchResultsContrainer from "./partials/SearchResultsContainer";
import {searchPatients} from '../../utils/mockAPIUtils';
import {useAsync} from 'react-use';

export default function SearchPatients(props) {
  const query= props.location.search;

  return (
    <React.Fragment>
    <PatientSearchBar/>
    <SearchResultsContainer
    results={}
    loading={}
    error={}
     />
    </React.Fragment>
  );
}

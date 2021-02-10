import {SEARCH_PATH} from "../constants/routePaths";

export function buildQueryString(oldQueryString, options) {
  let params = new URLSearchParams(oldQueryString);

  Object.keys(options).forEach((key) => {
    if (options[key]) {
      params.set(key, options[key]);
    } else {
      params.delete(key);
    }
  });
  return "?" + params.toString();
}

export function getParamValue(queryString, param) {
  return new URLSearchParams(queryString).get(param);
}

export function makeSearchLink(term) {
    return `/search?q=${term}`;
}

export function makePatientLink(patientId){
  return `/patients/${patientId}`
}
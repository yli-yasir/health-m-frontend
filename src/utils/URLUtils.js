import { SEARCH_PATH } from "../App/routePaths";

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

export function makePatientSearchLink(term) {
  return `/search?q=${term}`;
}

export function makePatientLink(patientId) {
  return `/patients/${patientId}`;
}

export function makePatientEditLink(patientId) {
  return `${makePatientLink(patientId)}/edit`;
}

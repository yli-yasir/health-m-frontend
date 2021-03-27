import axios from "axios";
import { buildQueryString } from "./URLUtils";
const BASE_URL = process.env.REACT_APP_API_URL;
const TOKEN_KEY= 'healthmtkn';

const getAuthHeaders = ()=> ({
  'Authorization': 'Bearer ' + localStorage.getItem(TOKEN_KEY) 
});

axios.defaults.headers = getAuthHeaders();


export async function searchPatients(term, limit, page) {
  const queryString = buildQueryString("", { q: term, page, limit });
  const response = await axios.get(`${BASE_URL}/patients${queryString}`);
  return response.data;
}

export async function addPatient(patient) {
  const res = await axios.post(`${BASE_URL}/patients`, patient);
  let patientId;
  //Extract the id out of the response location header
  patientId = res.headers.location.match(/[^/]+$/g)[0];
  return patientId;
}

export async function getPatient(id) {
  const res = await axios.get(`${BASE_URL}/patients/${id}`);
  return res.data;
}

export async function updatePatient(id, update) {
  return await axios.patch(`${BASE_URL}/patients/${id}`, update);

}

export async function deletePatient(id) {
  return await axios.delete(`${BASE_URL}/patients/${id}`)

}

export async function login(credentials) {
  const response =  await axios.post(`${BASE_URL}/login`, credentials);
  localStorage.setItem(TOKEN_KEY,response.data.token);
  //Refresh the default headers with the new token
  axios.defaults.headers= getAuthHeaders();
  return response;
}

export async function verifyLoggedIn() {
  return await axios.get(`${BASE_URL}/login`);
}

export function logout() {
  return localStorage.setItem(TOKEN_KEY,'')
}


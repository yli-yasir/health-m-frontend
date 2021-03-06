import axios from "axios";
import { buildQueryString } from "./URLUtils";
const BASE_URL = "http://localhost:8000";

const axiosWithCredentials = axios.create({withCredentials:true});

export async function searchPatients(term, limit, page) {
  const queryString = buildQueryString("", { q: term, page,limit });
  console.log(queryString);
  const response = await axiosWithCredentials.get(`${BASE_URL}/patients${queryString}`);
  return response.data;
}

export async function addPatient(patient) {
  const res = await axiosWithCredentials.post(`${BASE_URL}/patients`, patient);
  let patientId;
  //Extract the id out of the response location header
  patientId = res.headers.location.match(/[^/]+$/g)[0];
  return patientId;
}

export async function getPatient(id) {
  const res = await axiosWithCredentials.get(`${BASE_URL}/patients/${id}`);
  return res.data;
}

export async function updatePatient(id,update) {
  return await axiosWithCredentials.patch(`${BASE_URL}/patients/${id}`,update);
  
}

export async function deletePatient(id) {
  return await axiosWithCredentials.delete(`${BASE_URL}/patients/${id}`)

}

export async function login(credentials){
  return await axiosWithCredentials.post(`${BASE_URL}/login`,credentials);
}



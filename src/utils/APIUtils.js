import axios from "axios";
import { buildQueryString } from "./URLUtils";
const BASE_URL = "http://localhost:8000";

export async function searchPatients(term, limit, page) {
  const skip = limit * (page - 1);
  const queryString = buildQueryString("", { q: term, skip });
  const response = await axios.get(`${BASE_URL}/patients${queryString}`);
  return response.data;
}

export async function addPatient(patient) {
  console.log('submitting');
  console.log(patient);
  const res = await axios.post(`${BASE_URL}/patients`, patient);
  let patientId;
  if (res.headers.location) {
    patientId = res.headers.location.match(/[^/]+$/g)[0];
  }
  return patientId;
}

export async function getPatient(id) {
  const res = await axios.get(`${BASE_URL}/patients/${id}`);
  console.log(res.data);
  return res.data;
}

export async function updatePatient(query, fields) {}

export async function deletePatient(postId) {}

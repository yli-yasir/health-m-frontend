import axios from "axios";
import {buildQueryString} from './URLUtils';
const BASE_URL = "http://localhost:8000";

export async function searchPatients(term, limit, page) {
  const skip = limit * (page - 1);
  const queryString = buildQueryString('',{ q: term, skip });
  const response = await axios.get(`${BASE_URL}/patients${queryString}`);
  return response.data;
}

export async function addPatient(patient){
  await axios.post('/patients',patient);
}

export async function getPatient(id) {
  const res = await axios.get(`${BASE_URL}/patients/${id}`);
  return res.data;
}

export async function updatePatient(query, fields) {}

export async function deletePatient(postId) {}

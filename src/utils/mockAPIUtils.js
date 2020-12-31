import axios from "axios";

export async function searchPatients(limit, page) {
  const skip = limit * (page-1);
  const response = await axios.get(
    `https://mockend.com/yli-yasir/health-m/patients?limit=${limit}&offset=${skip}`
  );
  return response.data;
}

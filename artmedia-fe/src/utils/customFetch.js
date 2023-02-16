import { parseCookies } from 'nookies';

const API_BASE_URL = 'http://localhost:5000';

async function apiFetch(method, endpoint, data) {
  const headers = {
    'Content-Type': 'application/json',
  };

  const { jwt } = parseCookies(); // Get the JWT token from cookies
  if (jwt) {
    headers.Authorization = `Bearer ${jwt}`;
  }

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, requestOptions);
  if (!response.ok) {
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response.json();
}

export default apiFetch;
import axios from "axios";
import { toastErrorMessage } from "../../utils/toastMessage";

// Axios Setting
// Common Headers
const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.defaults.headers.common["Accept"] = "application/json";
// End

// Post Headers
axios.defaults.headers.post["Content-Type"] = "application/json";
// End

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedErrors) {
    toastErrorMessage("There was a problem with the server");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

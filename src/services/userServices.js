import http from "./httpService";
import config from "./config.json";

// Auth Services
export const registerUser = (user) => {
  return http.post(
    `${config.structureApi}/api/account/register`,
    JSON.stringify(user)
  );
};

export const loginUser = (user) => {
  return http.post(
    `${config.structureApi}/api/account/signin`,
    JSON.stringify(user)
  );
};

export const logoutUser = (token) => {
  return http.post(
    `${config.structureApi}/api/account/signout`,
    JSON.stringify(token)
  );
};
// End
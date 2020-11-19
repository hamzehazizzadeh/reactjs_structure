import http from "./configServices/httpService";
import config from "./configServices/config.json";

// Auth Services
export const signupService = (userData) => {
  return http.post(`${config.structureApi}/Auth/signup`, JSON.stringify(userData));
};

export const signinService = (userData) => {
  return http.post(`${config.structureApi}/Auth/signin`, JSON.stringify(userData));
};

export const signoutService = () => {
  return http.post(`${config.structureApi}/Auth/signout`);
};
// End

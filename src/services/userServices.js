import http from "./configServices/httpService";
import { productApi } from "./configServices/config.json";

// OTP Services
export const sendOTPService = (data) => {
  return http.post(`${productApi}/Auth/OTP/Send`, JSON.stringify(data));
};

export const verifyOTPService = (data) => {
  return http.post(`${productApi}/Auth/OTP/Verify`, JSON.stringify(data));
};
// End

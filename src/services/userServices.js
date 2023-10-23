import http from "./configServices/httpService";
import { base_url } from "./configServices/config";

// OTP Services
export const sendOTPService = (data) => {
  return http.post(`${base_url}/Auth/OTP/Send`, JSON.stringify(data));
};

export const verifyOTPService = (data) => {
  return http.post(`${base_url}/Auth/OTP/Verify`, JSON.stringify(data));
};
// End

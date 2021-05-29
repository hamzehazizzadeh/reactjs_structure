import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getCookies = (name) => {
  return cookies.get(name);
};

export const removeCookies = (name, path = "/") => {
  return cookies.remove(name, { path });
};

export const setCookies = (name, value, path = "/") => {
  return cookies.set(name, value, { path });
};

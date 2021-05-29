import { convertToEnglishNumber } from "../convertNumberUtils/convertNumberUtils";

export const getLocaleDate = (
  locales = "fa-IR",
  options = { year: "numeric", month: "2-digit", day: "2-digit" }
) => {
  return convertToEnglishNumber(
    new Date().toLocaleDateString(locales, options)
  );
};

//* Start Number Utils
export const numberSeparate = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
//* End Number Utils

//* Start JWT Utils
export const decodeJWT = (token) => {
  // Todo: Fixed jsonwebtoken Bug
  // return jwt.decode(token, { complete: true });
};
//* End JWT Utils

//* Start Convert Number Utils
let persianNumbers = [
  /۰/g,
  /۱/g,
  /۲/g,
  /۳/g,
  /۴/g,
  /۵/g,
  /۶/g,
  /۷/g,
  /۸/g,
  /۹/g,
];
let arabicNumbers = [
  /٠/g,
  /١/g,
  /٢/g,
  /٣/g,
  /٤/g,
  /٥/g,
  /٦/g,
  /٧/g,
  /٨/g,
  /٩/g,
];
let englishNumbers = [
  /0/g,
  /1/g,
  /2/g,
  /3/g,
  /4/g,
  /5/g,
  /6/g,
  /7/g,
  /8/g,
  /9/g,
];

export const convertToArabicNumber = (str) => {
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
    }
  }
  return str;
};

export const convertToEnglishNumber = (str) => {
  if (typeof str === "string") {
    for (var i = 0; i < 10; i++) {
      str = str.replace(persianNumbers[i], i).replace(englishNumbers[i], i);
    }
  }
  return str;
};
//* End Convert Number Utils

//* Start Date Utils
export const getLocaleDate = (
  locales = "fa-IR",
  options = { year: "numeric", month: "2-digit", day: "2-digit" }
) => {
  return convertToEnglishNumber(
    new Date().toLocaleDateString(locales, options)
  );
};
//* End Date Utils

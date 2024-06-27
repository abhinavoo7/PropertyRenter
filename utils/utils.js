// this file contains utils functions

/**
 * @description function to test if the data is empty
 * @param {null | undefined | String | Object | Array} data
 * @returns {Boolean}
 * @example data = undefined
 * @returns true
 * @example data = null
 * @returns true
 * @example data = ""
 * @returns true
 * @example data = 'a'
 * @returns false
 */
export const isEmpty = (data) => {
  return (
    data === undefined ||
    data === null ||
    data === "undefined" ||
    data === "null" ||
    data === "" ||
    (typeof data === "object" && Object.keys(data).length === 0) ||
    (Array.isArray(data) && data.length === 0)
  );
};

/**
 * @description function to convert text in pascal case
 * @param {String} text
 * @returns {String}
 */
export const convertTextToPascalCase = (text) => {
  return text?.trim()?.replace(/(?:^|\b)(\w)/g, (match) => match.toUpperCase());
};

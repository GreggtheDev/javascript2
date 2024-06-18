// 1. Joining Array Elements
/**
 * This function joins all elements of an array into a string with a specified separator.
 * @param {Array} arr - An array of strings.
 * @param {string} separator - A separator string.
 * @returns {string} - A string composed of array elements separated by the given separator.
 */
function joinElements(arr, separator) {
    return arr.join(separator);
}

// 2. Sorting Arrays
/**
 * This function sorts an array of numbers in ascending order.
 * @param {Array} arr - An array of numbers.
 * @returns {Array} - An array sorted in ascending order.
 */
function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}

// 3. Flattening Arrays
/**
 * This function flattens a nested array to a single level.
 * @param {Array} arr - A nested array of any depth.
 * @returns {Array} - A single-level array.
 */
function flattenArray(arr) {
    return arr.flat(Infinity);
}

// 4. Filtering Array Values
/**
 * This function removes all false, null, 0, and blank values from an array.
 * @param {Array} arr - An array containing various data types.
 * @returns {Array} - An array with only truthy values.
 */
function filterValues(arr) {
    return arr.filter(Boolean);
}
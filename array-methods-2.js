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

// 5. Computing the Union of Two Arrays
/**
 * This function computes the union of two arrays without duplicates.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - An array representing the union of the input arrays, sorted and without duplicates.
 */
function unionArrays(arr1, arr2) {
    let union = [...new Set([...arr1, ...arr2])];
    return union.sort((a, b) => a - b);
}

// Call joinElements function
console.log(joinElements(["Red", "Green", "White", "Black"], ",")); // Output: "Red,Green,White,Black"

// Call sortArray function
console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6])); // Output: [1, 1, 2, 3, 4, 5, 6, 9]

// Call flattenArray function
console.log(flattenArray([1, [2, [3, [4]], 5]])); // Output: [1, 2, 3, 4, 5]

// Call filterValues function
console.log(filterValues([58, '', 'abcd', true, null, false, 0])); // Output: [58, 'abcd', true]

// Call unionArrays function
console.log(unionArrays([1, 2, 3], [100, 2, 1, 10])); // Output: [1, 2, 3, 10, 100]

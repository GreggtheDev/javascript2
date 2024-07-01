// Data set
const users = [
    // This is an array of user objects. Each object represents a user with properties like id, firstName, lastName, logins, and isPremiumMember.
];

// Find a user named 'Jose'
let jose = users.find(user => user.firstName === 'Jose');
// This line uses the find method to get the first user object in the users array where the firstName property is 'Jose'.

console.log(jose);
// This line logs the user object for 'Jose' to the console.

// Get an array of all the premium members
let premiumMembers = users.filter(user => user.isPremiumMember);
// This line uses the filter method to create a new array with all users who are premium members (isPremiumMember property is true).

console.log(premiumMembers);
// This line logs the array of premium member user objects to the console.

// Get an array of all the user last names
let lastNames = users.map(user => user.lastName);
// This line uses the map method to create a new array with the lastName of each user in the users array.

console.log(lastNames);
// This line logs the array of user last names to the console.

// Get an array of the full names who have logged in more than 10 times
let frequentUsers = users
    .filter(user => user.logins > 10)
    .map(user => `${user.firstName} ${user.lastName}`);
// This line first filters the users who have logged in more than 10 times, then maps those users to an array of their full names.

console.log(frequentUsers);
// This line logs the array of frequent user full names to the console.

// Get the total number of logins for the list of users
let totalLogins = users.reduce((total, user) => total + user.logins, 0);
// This line uses the reduce method to get the total number of logins from all users. It starts with a total of 0 and adds the number of logins for each user.

console.log(totalLogins);
// This line logs the total number of logins to the console.

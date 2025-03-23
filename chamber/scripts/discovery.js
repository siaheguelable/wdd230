// Get last visit from localStorage or use the current time if not found
let lastVisit = new Date(window.localStorage.getItem("lastVisit")) || new Date();
let currentVisit = new Date();

// Function to check if less than a day has passed
function isLessThanADay(lastVisit, currentVisit) {
    let diffTime = currentVisit - new Date(lastVisit); // Ensure lastVisit is a Date object
    let oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    return diffTime < oneDay;
}

// Get the number of visits from localStorage or default to 0
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Check visit conditions
if (numVisits === 1) {
    alert("Welcome! Let us know if you have any questions.");
} else if (isLessThanADay(lastVisit, currentVisit)) {
    alert("Back so soon! Awesome!");
} else {
    alert(`Your last visit was on: ${lastVisit.toLocaleString()}`);
}

// Update last visit and numVisits in localStorage
window.localStorage.setItem("lastVisit", currentVisit.toISOString()); // Store as a string
window.localStorage.setItem("numVisits-ls", numVisits + 1);

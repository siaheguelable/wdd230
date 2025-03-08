const currentDate = new Date(); // Use a different variable name

let formattedDate = currentDate.toDateString(); // Convert to readable format

document.getElementById("lastmodification").innerText = formattedDate; // Set text content

console.log(formattedDate); // Log to console

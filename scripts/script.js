// Get the current date
var currentDate = new Date();

// Get the day, month, and year from the current date
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
var year = currentDate.getFullYear();

// Format the date as "dd/mm/yyyy"
var formattedDate = day + '/' + month + '/' + year;

// Display the formatted date in the element with id "lastUpdateDate"
document.getElementById("lastUpdateDate").textContent = formattedDate;

const hamButton = document.querySelector('#hamButton');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});


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



var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1; // Month is zero-indexed, so we add 1
var year = date.getFullYear();
// Format the date as "dd/mm/yyyy"
var format = day + '/' + month + '/' + year;
document.getElementById("p1").innerHTML = format;


// Get current date
var currentDate = new Date();

// Check Monday or Tuesday
if (currentDate.getDay() === 1 || currentDate.getDay() === 2) {
    // Create the banner element
    var banner = document.createElement('div');
    banner.id = 'banner';
    banner.innerHTML = '🤝🏼 Come join us for the chamber meet and greet Wednesday at 8:00 p.m.';
	// Add the banner on top
	document.body.insertBefore(banner, document.body.firstChild);
    }

	
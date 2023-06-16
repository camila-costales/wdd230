const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

/**
 * This function fetches data from a URL, converts it to JSON format, logs the prophet array to the
 * console, and displays the prophets on a webpage.
 */
async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  displayProphets(data.prophets);
}

/**
 * The function displays a list of prophets with their names and portraits on a webpage.
 * @param prophets - an array of objects representing prophets, each object containing properties such
 * as name, lastname, imageurl, etc.
 */
const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards'); // select the output container element
  //const prophetlist = prophets.members;

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let stats = document.createElement("div");
		stats.classList.add("stats");
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let death = document.createElement('p');
    let children = document.createElement('p');
    let length = document.createElement('p');
    let age = document.createElement('p');

    // age calculation
    let birth = new Date(prophet.birthdate);
    let dead = new Date(prophet.death);
    if (prophet.death === null) {
      dead = new Date();
    }
    //let age = Math.floor((dead - birth) / (365 * 24 * 60 * 60 * 1000));

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    birthdate.innerHTML = `<span class="label">Date of Birth:</span> ${prophet.birthdate}`;
    birthplace.innerHTML = `<span class="label">Place of Birth:</span> ${prophet.birthplace}`;
    death.innerHTML = `<span class="label">Date of Death:</span> ${prophet.death}`;
    children.innerHTML = `<span class="label">Number of Children:</span> ${prophet.numofchildren}`;
    length.innerHTML = `<span class="label">Years as Prophet:</span> ${prophet.length}`;
    age.innerHTML = `<span class="label">Age:</span> ${Math.floor((dead - birth) / (365 * 24 * 60 * 60 * 1000))}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(portrait);

    stats.appendChild(birthdate);
    stats.appendChild(birthplace);
    if (prophet.death !== null){
      stats.appendChild(death);
    }
    stats.appendChild(children);
    stats.appendChild(length);
    stats.appendChild(age);
    card.appendChild(stats);

    cards.appendChild(card);

  }) // end of forEach loop

} // end of function expression

getProphetData();
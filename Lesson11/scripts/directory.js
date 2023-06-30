const requestURL = 'scripts/directory.json';
const cards = document.querySelector('.cards');

async function getBusinesses() {
    const response = await fetch(requestURL);
    if(response.ok) {
        const data = await response.json();
        data.businesses.forEach(business => {displayBusinesses(business) });
    };
};

function displayBusinesses(business) {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let image = document.createElement('img');
    let memLevel = document.createElement('p');
    let slogan = document.createElement('p');
    let hr = document.createElement('hr');
    
    card.setAttribute('class', 'card');
    card.setAttribute('id', `card${business.id}`)

    h3.textContent = business.name;

    image.setAttribute('src', `images/${business.image_src}`);
    image.setAttribute('alt', `${business.name}'s logo`);
    image.setAttribute('loading', 'lazy');

    slogan.setAttribute('class', 'slogan');
    slogan.textContent = business.slogan;

    hr;

    address.textContent = business.address;
    phone.textContent = business.phone;
    website.setAttribute('href', business.website);
    website.textContent = "Website";

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(slogan);
    card.appendChild(hr);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
};

getBusinesses();

const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');
const display = document.querySelector('.cards');

gridButton.addEventListener('click', () => {
    display.classList.add('grid');
    display.classList.remove('list');
});

listButton.addEventListener('click', () => {
    display.classList.add('list');
    display.classList.remove('grid');
});

// discover last visit


let currentVisit = Date.now();

let lastVisit = Number(window.localStorage.getItem("last-visit-ls"));

let lastVisitDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(new Date(lastVisit));

let timeSinceLast = Math.round((currentVisit - lastVisit) / (86400000));

if (lastVisit !== 0) {
  visitsDisplay.innerHTML = "The last time you visited this page was "+lastVisitDate+", which was "+timeSinceLast+" days ago. Welcome back!";
} else {
  visitsDisplay.innerHTML = "This is your first time visiting this page!"
};

localStorage.setItem("last-visit-ls", currentVisit)

function selectResponse() {
	const s = document.querySelector('#selected');
	const sel = document.querySelector('#select-mem');
	s.style.display = "block";
	s.textContent = sel.value;
};

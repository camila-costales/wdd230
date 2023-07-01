const requestURL = 'scripts/directory.json';
const cards = document.querySelector('.section');


async function getBusinesses() {
    const response = await fetch(requestURL);
    if(response.ok) {
        let data = await response.json();
        let filter = data.businesses.filter(business => business.membership_level == "Gold" || business.membership_level == "Silver");
        for (let i=0; i < 3; i++){
          var count = filter.length
          var rand = Math.floor(Math.random() * count);
          var business = filter.splice(rand, 1)
          displayBusinesses(business[0])
        }

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
    let hr = document.createElement('hr');
    
    card.setAttribute('class', 'card');
    card.setAttribute('id', `card${business.id}`)

    h3.textContent = business.name;

    image.setAttribute('src', `images/${business.image_src}`);
    image.setAttribute('alt', `${business.name}'s logo`);
    image.setAttribute('loading', 'lazy');


    hr;

    address.textContent = business.address;
    phone.textContent = business.phone;
    memLevel.textContent = business.membership_level
    website.setAttribute('href', business.website);
    website.textContent = "Website";

    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(hr);
    card.appendChild(memLevel);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
};

getBusinesses();

const gridButton = document.querySelector('#grid-btn');
const listButton = document.querySelector('#list-btn');
const display = document.querySelector('.cards');



const requestURL = './scripts/data.json'
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    })

function displayCompanies(company) {
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('a')

    companyName.textContent = company.name;
    address.textContent = company.address;
    phone.textContent = company.phone;
    
    website.setAttribute('href', `https://${company.website}`);
    website.setAttribute('target', '_blank')
    website.textContent = company.website;

    image.setAttribute('src', company.image);
    image.setAttribute('alt', `Image of ${company.name}`);
    image.setAttribute('loading', 'lazy');

    // card.appendChild(image);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    document.querySelector('div.cards').appendChild(card)

}
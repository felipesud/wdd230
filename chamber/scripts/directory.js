const cards = document.querySelector('.cards');

fetch('/chamber/scripts/data.json')
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        const companies = jsonObject['companies'];
        companies.forEach(displayCompanies);
    })

function displayCompanies(company){
    let card = document.createElement('section');
    let companyName = document.createElement('h2');
    let image = document.createElement('img');
    let address = document.createElement('h3');
    let phone = document.createElement('h3');
    let website = document.createElement('h3')

    companyName.textContent = companies.name;
    address.textContent = `Address: ${companies.address}`;
    phone.textContent = companies.phone;
    website.textContent = companies.website;
 
    image.setAttribute('src', company.image);
    image.setAttribute('alt', `Image of ${company.name}`);
    image.setAttribute('loading', 'lazy');

    card.appendChild(image);
    card.appendChild(companyName);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
    document.querySelector('div.cards').appendChild(card)

}

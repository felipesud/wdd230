const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    })

function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let prophetName = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthProphet = document.createElement('h3');
    let deathProphet = document.createElement('h3');
    let placeBirth = document.createElement('h3')
    //Change the textContent property of the h2 element to contain the prophet's full name
    prophetName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthProphet.textContent = `Birthdate: ${prophet.birthdate}`;
    deathProphet.textContent = `Death: ${prophet.death}`;
    placeBirth.textContent = `Birthplace: ${prophet.birthplace}`;
    if(prophet.death === null){
        deathProphet.textContent = 'Current President'
    }
    
    let order = 0
    if (prophet.order === 1) {
        order = `The ${prophet.order}st Latter-day President`
    } else if (prophet.order === 2) {
        order = `The ${prophet.order}nd Latter-day President`
    } else if (prophet.order === 3) {
        order = `The ${prophet.order}rd Latter-day President`
    } else {
        order = `The ${prophet.order}th Latter-day President`
    }

    //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${order} `);
    portrait.setAttribute('loading', 'lazy');
    //Add/append the section(card) with the h2 element
    card.appendChild(prophetName)
    card.appendChild(birthProphet);
    card.appendChild(deathProphet);
    card.appendChild(placeBirth);
    card.appendChild(portrait);
    //Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card)
}
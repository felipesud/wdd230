const visitsDisplay = document.querySelector(".visits");
const lastVisitDisplay = document.querySelector(".lastVisit");

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;

} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDate.textContent = Date.now();

let lastVisit = Number(window.localStorage.getItem("lastVisit"));
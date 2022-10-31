const visitsDisplay = document.querySelector(".visit");
const lastVisitDisplay = document.querySelector(".lastVisit");
const today = new Date()
const todayTime = today.getTime()


let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;

} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);



const lastVisit = Number(window.localStorage.getItem("last-visit"));
console.log(lastVisit)

if (lastVisit !== 0) {

	const time = Date.now();


	let difference = ((time - lastVisit) / (1000 / 60 / 60 / 24)).toFixed(0);




	localStorage.setItem("last-visit", time);


	lastVisitDisplay.textContent = difference;

} else {
	visitsDisplay.textContent = `Today is your first day here`;
	localStorage.setItem("last-visit", Date.now());
}
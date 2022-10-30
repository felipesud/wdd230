const visitsDisplay = document.querySelector(".visits");
const lastVisitDisplay = document.querySelector(".lastVisits");
const today = new Date()
const todayTime = today.getTime()
// let accessData = []

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;

} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
// let access = [].concat(today, accessData)
numVisits++;
localStorage.setItem("visits-ls", numVisits);


// Using local storage, display the amount of time in days 
//(rounded to a whole number) between user visits to this page by the user's agent (browser). 
//You may elect to display this information where you deem fit on the page.
localStorage.setItem('today', todayTime)










// get the stored value in localStorage
const lastVisit = Number(window.localStorage.getItem("last-visit"));


if (lastVisit !== undefined) {
    
    const time = Date.now();
	console.log(time)
	// const convertTime = time.getTime()

    let difference = ((time - lastVisit) / (1000*60*60*24)).toFixed(0);
	console.log(difference)

   lastVisitDisplay.textContent = difference;
	
    // localStorage.setItem("last-visit", time);
    

} else {
	lastVisitDisplay.textContent = `Your last visit is today`;
    localStorage.setItem("last-visit",  Date.now());
}


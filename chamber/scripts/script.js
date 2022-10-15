// Showing Current Year
const date = new Date();
const year = date.getFullYear();
const fullDate = new Intl.DateTimeFormat('en-US', {dateStyle: 'full'}).format(date);


document.getElementById("current-date").innerHTML =  fullDate;

// Last Modified
const oLastModified = new Date(document.lastModified)
document.getElementById("last-modified").innerHTML = oLastModified;




// Menu Hamburger Button
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  
  const x = document.getElementById('hamburgerBtn');
  x.onclick = toggleMenu;

  // Use JavaScript to display a banner on Mondays or Tuesdays 
  //only at the very top of the page that says "🤝🏼 
  //Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
  // Make sure your design matches your schema for the site.

const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentWeekDay = week[date.getDay()];
if (currentWeekDay === 'Tuesday' || currentWeekDay === 'Wednesday'){ 
  // currentWeekDay === 'Saturday' => used for testing
  document.getElementById('hidden').id = 'show';
  document.getElementById('show').id = 'hidden';
  
    
    };
  
  

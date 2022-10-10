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
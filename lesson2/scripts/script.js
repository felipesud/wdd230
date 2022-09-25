// Showing Current Year
const date = new Date();
const year = date.getFullYear();

document.getElementById("current-date").innerHTML = year;

// Last Modified
const oLastModified = new Date(document.lastModified)
document.getElementById("last-modified").innerHTML = oLastModified;
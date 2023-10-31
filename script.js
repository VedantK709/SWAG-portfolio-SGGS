let educationDiv = document.getElementById("edu");
let educationButton = document.getElementById("eduBtn");
educationButton.addEventListener
("click", function(event) {
educationDiv.classList.toggle("hiddenButton");
event.preventDefault();
});

let skillDiv = document.getElementById("skill");
let skillButton = document.getElementById("skillBtn");
skillButton.addEventListener("click", function(event) {
    skillDiv.classList.toggle("hiddenButton");
    event.preventDefault();
})
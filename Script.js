// Array with 5+ items
const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Web Design",
    "Responsive Layout",
    "GitHub"
];

// Select skills container
const skillsContainer = document.getElementById("skillsContainer");

// Loop renders items to page
skills.forEach(skill => {

    // Create skill card
    const skillCard = document.createElement("div");

    // Add text content
    skillCard.textContent = skill;

    // Style using JavaScript
    skillCard.style.background = "orange";
    skillCard.style.padding = "15px";
    skillCard.style.borderRadius = "10px";
    skillCard.style.color = "white";
    skillCard.style.fontWeight = "bold";
    skillCard.style.textAlign = "center";

    // Append to DOM
    skillsContainer.appendChild(skillCard);
});

// Button interaction
const themeBtn = document.getElementById("themeBtn");

// Function defined and called
function changeTheme(mode) {

    // Conditional logic
    if (mode === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// Event listener
let darkMode = false;

themeBtn.addEventListener("click", function() {

    darkMode = !darkMode;

    if (darkMode) {
        changeTheme("dark");
        themeBtn.textContent = "Light Mode";
    } else {
        changeTheme("light");
        themeBtn.textContent = "Dark Mode";
    }
})

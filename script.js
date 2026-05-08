// This adds a simple greeting based on the time of day
const heroText = document.querySelector('#hero p');
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = "Good Morning! I'm an ";
} else if (hour < 18) {
    greeting = "Good Afternoon! I'm an ";
} else {
    greeting = "Good Evening! I'm an ";
}

// This updates the text on your screen dynamically
heroText.innerText = greeting + "Aspiring Web Developer & Computer Science Graduate";

console.log("Portfolio script loaded successfully!");

// Countdown Timer
const countdownDate = new Date('January 1, 2025 00:00:00').getTime();
const progressBar = document.getElementById('progress-bar');
const quoteElement = document.getElementById('quote');
const quotes = [
    "New Year, New Beginnings!",
    "Make this year your best yet!",
    "Cheers to a year filled with adventure!",
    "Embrace the fresh start!",
    "Believe in yourself and all that you are!"
];

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    const totalDuration = countdownDate - new Date('January 1, 2025 00:00:00').getTime();
    const progress = (totalDuration - distance) / totalDuration * 100;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Update the progress bar
    progressBar.style.width = progress + "%";

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.querySelector('.countdown-title').innerHTML = "Happy New Year!";
        document.querySelector('.countdown-description').innerHTML = "Time to celebrate!";
        displayGreeting();
        playCelebrationSound();
        startConfetti();
    }
    
    // Change quote every 10 seconds
    if (Math.floor(distance / 1000) % 10 === 0) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.innerHTML = randomQuote;
    }
}, 1000);

function displayGreeting() {
    const greetingMessage = document.getElementById('greeting-message');
    greetingMessage.innerHTML = "Wishing you a year full of happiness!";
    greetingMessage.style.display = "block";
}

function playCelebrationSound() {
    const sound = document.getElementById('celebration-sound');
    sound.play();
}

function startConfetti() {
    // You can use a library like 'canvas-confetti' or write your own confetti effect here
}

// Dark Mode Toggle
document.getElementById("theme-button").onclick = function() {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("theme-button");
    button.innerText = button.innerText === "Switch to Dark Mode" ? "Switch to Light Mode" : "Switch to Dark Mode";
};

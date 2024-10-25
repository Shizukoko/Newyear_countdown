// Countdown Timer
const countdown = document.getElementById('countdown');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Sound effect for New Year
const celebrationSound = new Audio('https://www.soundjay.com/button/sounds/button-3.mp3'); // Link to a sound effect

// Function to update countdown
function updateCountdown() {
    const now = new Date().getTime();
    const newYear = new Date('January 1, 2025 00:00:00').getTime(); // Set to the next New Year
    const distance = newYear - now;

    // Calculate time components
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Smoothly update the numbers with a transition
    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    // Change background color based on time left
    if (distance < 86400000) { // Less than a day
        document.body.style.background = 'linear-gradient(135deg, #ff7e67, #ffbc67)';
    } else if (distance < 604800000) { // Less than a week
        document.body.style.background = 'linear-gradient(135deg, #67b7ff, #67ff89)';
    } else {
        document.body.style.background = 'linear-gradient(135deg, #4a4e69, #1e1e2f)';
    }

    // Reset countdown when New Year is reached
    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "<h2>🎉 Happy New Year! 🎉</h2>";
        celebrationSound.play(); // Play sound
        document.body.style.background = 'linear-gradient(135deg, #ffcc00, #ff6699)'; // Celebration background
        createConfetti(); // Call confetti function
    }
}

// Update countdown every second
const interval = setInterval(updateCountdown, 1000);

// Initial call to set the countdown immediately
updateCountdown();

// Function to create a confetti effect
function createConfetti() {
    const colors = ['#FFC700', '#FF003F', '#4CD964', '#007AFF', '#FF9500'];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

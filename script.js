function updateCountdown() {
    const now = new Date();
    let nextYear = now.getFullYear() + 1;
    let newYear = new Date(`January 1, ${nextYear} 00:00:00`);
    
    // Calculate the difference in milliseconds
    let timeDiff = newYear - now;

    // If we're in the new year, reset to count down to the next one
    if (timeDiff < 0) {
        newYear = new Date(`January 1, ${nextYear + 1} 00:00:00`);
        timeDiff = newYear - now;
    }

    // Convert to days, hours, minutes, and seconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("countdown").innerHTML = 
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    // Update countdown every second
    setTimeout(updateCountdown, 1000);
}

// Initialize countdown
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {

    let startDate = new Date("2024-12-31");
    const dateElement = document.getElementById("date-display");
    
    function updateDateDisplay() {
        let now = new Date();
        let timeDiff = now - startDate;
        let daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        dateElement.textContent = `${daysPassed} days of coding`;
    }
    
    updateDateDisplay();
    
    const now = new Date();
    let timeUntilMidnight = new Date(now);
    timeUntilMidnight.setHours(24, 0, 0, 0);
    let msUntilMidnight = timeUntilMidnight - now;
    
    setTimeout(function () {
        updateDateDisplay();
        setInterval(updateDateDisplay, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
});
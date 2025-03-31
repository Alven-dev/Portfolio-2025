window.addEventListener("DOMContentLoaded", function() {
    gsap.from("#art", {
        duration: 2,
        opacity: 0,
        x: 50,
        y: 50
    })
})

window.addEventListener("DOMContentLoaded", function() {
    gsap.from("#itone", {
        delay: 2,
        duration: 1.5,
        opacity: 0,
        x: 200
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navbar = document.querySelector(".navbar.mobile");
    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        navbar.classList.toggle("active"); 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".item").forEach(item => {
        let randomDuration = (Math.random() * 5 + 8).toFixed(2);
        item.style.setProperty("--animation-duration", `${randomDuration}s`);
    });
});



function showToast(message) {
    var toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");
    toast.classList.remove("hidden")

    setTimeout(function() {
        toast.classList.remove("show");
        toast.classList.add("hidden")
    }, 2000);
}

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

document.getElementById("discord").addEventListener("click", function() {
    var discordId = "321676574556553216"

    navigator.clipboard.writeText(discordId).then(function() {
        showToast("Discord ID copied to clipboard!");
    }).catch(function(err) {
        console.error("Failed to copy Discord ID", err);
    });
});

    document.getElementById("clipboard").addEventListener("click", function() {
        var email = "mikolajct@gmail.com";
        
        navigator.clipboard.writeText(email).then(function() {
            showToast("Email copied to clipboard!");
        }).catch(function(err) {
            console.error("Failed to copy email: ", err);
        });
    });

    document.getElementById("discord-btn").addEventListener("click", function() {
        var discordId = "321676574556553216"
    
        navigator.clipboard.writeText(discordId).then(function() {
            showToast("Discord ID copied to clipboard!");
        }).catch(function(err) {
            console.error("Failed to copy Discord ID", err);
        });
    });
    


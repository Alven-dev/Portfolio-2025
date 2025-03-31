
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


document.getElementById("discord").addEventListener("click", function() {
    var discordId = "321676574556553216"

    navigator.clipboard.writeText(discordId).then(function() {
        showToast("Discord ID copied to clipboard!");
    }).catch(function(err) {
        console.error("Failed to copy Discord ID", err);
    });
});
    


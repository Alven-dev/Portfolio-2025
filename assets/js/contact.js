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
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

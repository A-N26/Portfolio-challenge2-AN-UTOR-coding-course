var scrollUp = document.querySelector("#Scroll-up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
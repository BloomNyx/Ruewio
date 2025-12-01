const headerToggle = document.getElementById("headerToggle");
const headerNav = document.querySelector(".headerNav");

if(headerToggle) {
    headerToggle.addEventListener("click", () => {
        headerNav.classList.toggle("show");
        headerToggle.getAttribute("aria-expanded") === "true"
        ? headerToggle.setAttribute("aira-expanded", "false")
        : headerToggle.setAttribute("aria-expanded", "true");
    })
}
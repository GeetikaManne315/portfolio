document.addEventListener("DOMContentLoaded", function () {
    // Highlight the active navigation link
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    // Smooth scrolling for internal navigation links (if you use same-page navigation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            let targetSection = document.querySelector(this.getAttribute("href"));

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

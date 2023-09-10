const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;


body.classList.add("dark-theme");
themeToggleBtn.textContent = "🌙";

// Toggle theme on button click
themeToggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme");
        themeToggleBtn.textContent = "🌞";
    } else {
        body.classList.add("dark-theme");
        themeToggleBtn.textContent = "🌙";
    }
});

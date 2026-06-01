const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
}

function getSystemTheme() {
    return matchMedia.matches ? "dark" : "light";
}

function setInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    applyTheme(savedTheme || getSystemTheme());
}

matchMedia.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(getSystemTheme());
    }
});

setInitialTheme();
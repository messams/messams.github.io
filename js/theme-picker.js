/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
    const newCta = isDark ? '<i class="bx bx-moon" id="theme-button"></i>' : '<i class="bx bx-sun" id="theme-button"></i>';
    
    // Set the aria-label attribute to describe the button's purpose
    buttonEl.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    
    // Set the button's inner HTML to include the new icon
    buttonEl.innerHTML = newCta;
}

/**
 * Utility function to update the theme setting on the html tag.
 */
function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

// 1. Grab what we need from the DOM and system settings on page load
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// 2. Work out the current site settings
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// 3. Update the theme setting and button text according to current settings
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

// 4. Define paths for the logos
const logo = document.getElementById('logo');
const darkLogo = "./img/Dark-300-300px.png";
const lightLogo = "./img/Light-300-300px.png";

// Function to set the logo based on the theme
function setLogo(theme) {
    logo.src = theme === 'dark' ? darkLogo : lightLogo;
}

// Set the initial logo based on the current theme
setLogo(currentThemeSetting);

// Add an event listener to toggle the theme
button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
    setLogo(newTheme);

    currentThemeSetting = newTheme;
});

function toggleDropdown() {
    const dropdown = document.querySelector("#myDropdown");
    dropdown.classList.toggle("show");
    dropdown.style.display = dropdown.classList.contains("show") ? "flex" : "none";
    
}
// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches("a.dropbtn")) {
        const dropdown = document.querySelector("#myDropdown");
        if (dropdown.classList.contains("show")) {
            dropdown.classList.remove("show");
            dropdown.style.display = "none";
        }
    }
};
// script.js
document.addEventListener("DOMContentLoaded", function () {
    const changeTextButton = document.getElementById("changeTextButton");
    const displayText = document.getElementById("displayText");

    changeTextButton.addEventListener("click", function () {
        displayText.textContent = "Texto alterado!";
    });
});

const valueRange = document.getElementById("rangevalue");
const range = document.getElementById("r");
// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.getElementsByClassName("review").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("errorMessage");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";
        document.getElementById("password").focus();
    } else {
        alert("Passwords match! Form submitted successfully.");
        this.submit(); // Proceed with form submission
    }
});
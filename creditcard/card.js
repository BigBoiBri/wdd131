document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#payment-form");
    form.addEventListener("submit", submitHandler);
});

function submitHandler(event) {
    event.preventDefault();

    const errorMsg = document.querySelector(".errorMsg");
    errorMsg.textContent = "";

    const cardNumber = event.target.cardNumber.value.trim();
    const expMonth = parseInt(event.target.expMonth.value);
    const expYear = parseInt(event.target.expYear.value);


    const digitsOnly = cardNumber.replace(/\s+/g, "");
    if (isNaN(digitsOnly)) {
        errorMsg.textContent = "Card number must contain only numbers.";
        return false;
    }

    if (digitsOnly.length !== 16) {
        errorMsg.textContent = "Card number must be exactly 16 digits.";
        return false;
    }


    if (isNaN(expMonth) || expMonth < 1 || expMonth > 12) {
        errorMsg.textContent = "Enter a valid expiration month (01–12).";
        return false;
    }

    if (isNaN(expYear) || expYear < 0 || expYear > 99) {
        errorMsg.textContent = "Enter a valid two-digit year (e.g., 25 for 2025).";
        return false;
    }


    const fullYear = 2000 + expYear;
    const expirationDate = new Date(fullYear, expMonth - 1);
    const currentDate = new Date();
    currentDate.setDate(1); 

    if (expirationDate <= currentDate) {
        errorMsg.textContent = "Expiration date must be in the future.";
        return false;
    }


    alert("Form submitted successfully!");
}

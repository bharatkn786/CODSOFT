document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display-input");
    const buttons = document.querySelectorAll(".calculator form input");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            // Handle button click based on your logic
            // Example: display.value += button.value;

            // You might want to handle different button values differently
            // For example, for the "=" button, perform the calculation
            if (button.value === "=") {
                display.value = eval(display.value);
            } else if (button.value === "AC") {
                // Clear the display for "AC" button
                display.value = "";
            } else if (button.value === "DE") {
                // Handle deletion for "DE" button
                display.value = display.value.slice(0, -1);
            } else {
                // For other buttons, append their values to the display
                display.value += button.value;
            }
        });
    });
});

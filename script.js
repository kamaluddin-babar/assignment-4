
const economyIncrease = document.getElementById("economy-increase");
economyIncrease.addEventListener("click", function () {
    updateTicketQuantity("economy-class", 1);
});

const economyDecrease = document.getElementById("economy-decrease");
economyDecrease.addEventListener("click", function () {
   updateTicketQuantity("economy-class", -1); 
});

const businessIncrease = document.getElementById("business-increase");
businessIncrease.addEventListener("click", function () {
   updateTicketQuantity("business-class", 1); 
});

const businessDecrease = document.getElementById("business-decrease");
businessDecrease.addEventListener("click", function () {
   updateTicketQuantity("business-class", -1); 
});

const bookingBtn = document.getElementById("booking-btn");
bookingBtn.addEventListener("click", function () {
    document.getElementById("main-section").style.display = "none";
    document.getElementById("confirmation-info").style.display = "block";

    const businessQuantity = getInputValue("business-class");
    const businessTotalPrice = businessQuantity * 150;
    document.getElementById("business-quantity").innerText = businessQuantity;
    document.getElementById("business-total").innerText = businessTotalPrice;

    const economyQuantity = getInputValue("economy-class");
    const economyTotalPrice = economyQuantity * 100;
    document.getElementById("economy-quantity").innerText = economyQuantity;
    document.getElementById("economy-total").innerText = economyTotalPrice;

    const finalSubtotal = businessTotalPrice + economyTotalPrice;
    document.getElementById("final-subtotal").innerText = finalSubtotal;

    const finalTax = finalSubtotal * 0.1;
    document.getElementById("final-tax").innerText = finalTax;

    const finalTotal = finalSubtotal + finalTax;
    document.getElementById("final-total").innerText = finalTotal;
});

function updateTicketQuantity(ticketClass, sign) {
    const ticketCurrentQuantity = getInputValue(ticketClass);
    let ticketNewQuantity;
    if (ticketCurrentQuantity == 0 && sign == -1) {
        ticketNewQuantity = ticketCurrentQuantity;
    } else {
        ticketNewQuantity = ticketCurrentQuantity + sign;
    }
    document.getElementById(ticketClass).value = ticketNewQuantity;
    calculateTotalBill();
}

function getInputValue(inputId) {
    const currentValue = document.getElementById(inputId).value;
    const currentValueNum = parseInt(currentValue);
    return currentValueNum;
}

function calculateTotalBill() {
    const businessClass = getInputValue("business-class");
    const economyClass = getInputValue("economy-class");

    const subtotal = businessClass * 150 + economyClass * 100;
    const tax = subtotal * .1;
    const total = subtotal + tax;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = total;
}
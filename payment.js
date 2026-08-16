// ================= GET DATA FROM LOCAL STORAGE =================

const passenger = JSON.parse(localStorage.getItem("passenger"));

if (!passenger) {
    alert("Passenger data not found!");
    window.location.href = "passenger.html";
}

// Display Booking Summary
document.getElementById("passengerName").innerText = passenger.name;
document.getElementById("seatNumbers").innerText = passenger.seats.join(", ");
document.getElementById("totalAmount").innerText = "₹" + passenger.total;

// ================= PAY NOW =================

document.getElementById("payBtn").addEventListener("click", function () {

    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    if (!paymentMethod) {
        alert("Please select a payment method.");
        return;
    }

    const booking = {
        bookingId: "BUS" + Math.floor(Math.random() * 1000000),
        passenger: passenger.name,
        seats: passenger.seats,
        amount: passenger.total,
        payment: paymentMethod.value,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    localStorage.setItem("booking", JSON.stringify(booking));

    alert("Payment Successful!");

    window.location.href = "ticket.html";
});
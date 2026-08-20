const booking = JSON.parse(localStorage.getItem("booking"));

document.getElementById("bookingId").innerHTML =
booking.bookingId;

document.getElementById("passengerName").innerHTML =
booking.passenger;

document.getElementById("seatNumbers").innerHTML =
booking.seats.join(", ");

document.getElementById("amount").innerHTML =
"₹" + booking.amount;

document.getElementById("paymentMethod").innerHTML =
booking.payment;

document.getElementById("bookingDate").innerHTML =
booking.date;

document.getElementById("bookingTime").innerHTML =
booking.time;
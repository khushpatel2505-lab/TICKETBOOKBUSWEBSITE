// Show Selected Seats

const seats = JSON.parse(localStorage.getItem("selectedSeats")) || [];

document.getElementById("seatList").innerHTML =
seats.join(", ");

// Form Submit

document.getElementById("passengerForm")

.addEventListener("submit",function(e){

    e.preventDefault();

    const passenger={

        name:document.getElementById("name").value,

        age:document.getElementById("age").value,

        gender:document.getElementById("gender").value,

        mobile:document.getElementById("mobile").value,

        email:document.getElementById("email").value,

        seats:seats,

        total:localStorage.getItem("totalAmount")

    };

    localStorage.setItem(
        "passenger",
        JSON.stringify(passenger)
    );

    window.location.href="payment.html";

});
const seats = document.querySelectorAll(".seat:not(.booked)");

const selectedSeats = document.getElementById("selectedSeats");

const count = document.getElementById("count");

const total = document.getElementById("total");

const continueBtn = document.getElementById("continueBtn");

const price = 650;

let selected = [];

seats.forEach((seat)=>{

    seat.addEventListener("click",()=>{

        seat.classList.toggle("selected");

        const seatNo = seat.dataset.seat;

        if(selected.includes(seatNo)){

            selected = selected.filter(s=>s!==seatNo);

        }

        else{

            selected.push(seatNo);

        }

        selectedSeats.innerHTML =
        selected.length ?
        selected.join(", ") :
        "None";

        count.innerHTML = selected.length;

        total.innerHTML =
        selected.length * price;

    });

});

continueBtn.addEventListener("click",()=>{

    if(selected.length==0){

        alert("Please select at least one seat.");

        return;

    }

    localStorage.setItem(
        "selectedSeats",
        JSON.stringify(selected)
    );

    localStorage.setItem(
        "totalAmount",
        selected.length * price
    );

    window.location.href="passenger.html";

});
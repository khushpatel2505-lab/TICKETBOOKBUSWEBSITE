const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById("password").value;

    if(email === "" || password === ""){

        alert("Please fill in all fields.");

        return;
    }

    alert("Login Successful!");

    // Later:
    // window.location.href = "search.html";

});
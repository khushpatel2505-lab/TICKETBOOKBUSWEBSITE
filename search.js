const form = document.getElementById("searchForm");

form.addEventListener("submit",function(e){

    e.preventDefault();

    const from=document.getElementById("from").value;
    const to=document.getElementById("to").value;

    if(from===to){

        alert("Source and Destination cannot be same.");

        return;
    }

    // Next page

    window.location.href="buses.html";

});
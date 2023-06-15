let modal = document.getElementById("opening");

let span = document.getElementsByClassName("close")[0];

let visitor = prompt("who arth thou?");

if (visitor == "") {
    visitor = "Anonasd"
    document.getElementById("visitor").innerText = "Anon";
}else {
    document.getElementById("visitor").innerText = visitor;
}

function activeHome(){
    document.getElementById("home").className = "navItem navActive";
    document.getElementById("profile").className = "navItem";
}
function activeProfile(){
    document.getElementById("home").className = "navItem";
    document.getElementById("profile").className = "navItem navActive";
    
}

function openModal(){
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

function hello(){
    alert("Hello, " + visitor);
}


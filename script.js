let total = 10564; // barra empieza avanzada

function showTab(number){

let tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => tab.classList.remove("show"));

document.getElementById("tab"+number).classList.add("show");

let buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.classList.remove("active"));

buttons[number-1].classList.add("active");
}

function donate(){

let money = parseFloat(document.getElementById("money").value);

let bar = document.getElementById("bar");
let text = document.getElementById("text");

if(isNaN(money)){
text.innerHTML="Enter a valid number";
return;
}

if(money < 1){
text.innerHTML="Minimum donation is $1";
return;
}

total += money;

if(total > 35000){
total = 35000;
}

let percent = (total / 35000) * 100;

bar.style.width = percent + "%";

if(percent < 40){
text.innerHTML = "Raised: $" + total.toFixed(2) + " 🌱 Thank you for helping!";
}
else if(percent < 75){
text.innerHTML = "Raised: $" + total.toFixed(2) + " 🏠 Great support!";
}
else{
text.innerHTML = "Raised: $" + total.toFixed(2) + " ❤️ Amazing impact!";
}

document.getElementById("money").value="";
}

window.onload = function(){

let bar = document.getElementById("bar");

let percent = (10564 / 35000) * 100;

bar.style.width = percent + "%";

document.getElementById("text").innerHTML = "Raised: $10564";
}
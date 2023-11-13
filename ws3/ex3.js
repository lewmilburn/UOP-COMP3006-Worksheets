let date = new Date();
let time = date.toLocaleTimeString();

let greeting;

if (time < "12:00:00 PM") {
    greeting = "Good morning";
} else if (time < "6:00:00 PM") {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}

document.getElementById("greeting").innerHTML = greeting;
console.log(greeting);
console.log(time);
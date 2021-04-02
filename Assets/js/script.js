//Live date and time showing in Jumbotron

function LiveTime() {
$("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);

//variables for each timeblock 9-5
var Nine = moment().hour(9)

console.log(Nine.format("h"));

//Setting the start of day as 9am on any given day




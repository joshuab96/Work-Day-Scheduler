//Live date and time showing in Jumbotron

function LiveTime() {
$("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);

//variables for each timeblock 9-5
var Nine = moment().hour(9).format("h")
var Ten = moment().hour(10).format("h")
var Eleven = moment().hour(11).format("h")
var Twelve = moment().hour(12).format("h")
var One = moment().hour(13).format("h")
var Two = moment().hour(14).format("h")
var Three = moment().hour(15).format("h")
var Four = moment().hour(16).format("h")
var Five = moment().hour(17).format("h")

console.log(Nine, Ten, Eleven, Twelve, One, Two, Three, Four, Five)


//Setting the start of day as 9am on any given day



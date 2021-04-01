//Live date and time inbedded into the Jumbotron

function Timeupdate() {
$("#currentDay").text(moment().format("LLLL"))
}

setInterval(Timeupdate, 1000)
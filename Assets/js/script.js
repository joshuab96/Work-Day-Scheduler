//Live date and time showing in Jumbotron

function LiveTime() {
$("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);


//Document selectors

mainEl = $(".container")


//Creating timeblocks via a for loop





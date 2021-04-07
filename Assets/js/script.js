//Live date and time showing in Jumbotron

function LiveTime() {
$("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);


//Document selectors

mainEl = $(".container")

//Creating timeblocks via a for loop

rowEl = $("<div></div>")
hourEl = $("<div></div>")
inputEl = $("<input></input>")
saveBtnEl = $("<div></div>")

for (i = 0; i < 9; i++) {
    
}



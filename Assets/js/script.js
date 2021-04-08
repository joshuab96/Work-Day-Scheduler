//Live date and time showing in Jumbotron

function LiveTime() {
$("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);


//Document selectors

mainEl = $(".container")

//Creating timeblocks via a for loop

rowEl = $("<div></div>").addClass("row time-block")
hourEl = $("<div></div>").addClass("hour col")
inputEl = $("<input></input>").addClass("form-control-plaintext description col")
saveBtnEl = $("<div></div>").addClass("saveBtn button col submit d-flex h-100 ")
iconEl = $("<i></i>").addClass("fas fa-save col justify-content-center align-self-center ")

// Hours 9-5 with corresponding AM and PM displayed

var timeDesc = {
    hours:["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"]
}

// to dynamically append 8 timeblocks 9-5 to html page

 for (i = 0; i < 10; i++) {
    $(mainEl).append(rowEl.clone());
    $(rowEl).append(hourEl, inputEl, saveBtnEl);
    $(saveBtnEl).append(iconEl);
    $(hourEl).text(timeDesc.hours[i])
    
}



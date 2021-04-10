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
    hours:["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"],
    classHourid:["9","10","11","12","1","2","3","4","5"]
}

// to dynamically append 8 timeblocks 9-5 to html page

 for (i = 0; i < 10; i++) {
    $(mainEl).append(rowEl.clone());
    $(rowEl).append(hourEl, inputEl, saveBtnEl);
    $(saveBtnEl).append(iconEl);
    $(hourEl).text(timeDesc.hours[i]);
    $(inputEl).addClass(timeDesc.classHourid[i]);
    
}

// Displaying colour coded blocks in regards to hour time whether it is the past, preset or future, using grey, green or red.



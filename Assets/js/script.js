//Live date and time showing in Jumbotron

function LiveTime() {
    $("#currentDay").text(moment().format("LLLL"))
}
setInterval(LiveTime, 1000);

//assigning moment() to variable
var currentHour = moment().format("H");

console.log(currentHour)


//Container for the row elements

mainEl = $(".container")


// Hours 9-5 with corresponding AM and PM displayed

var timeDesc = {
    hours: ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"],
}

// Creating timeblocks via a for loop
// to dynamically append 8 timeblocks 9-5 to html page
// including 

for (i = 0; i <= timeDesc.hours.length; i++) {

    //setting append hour, input field and savebtn container to the row
    var rowEl = $("<div>").addClass("row time-block").append(hourEl, inputEl, saveBtnEl)

    //adding classes to icon element for icon img and centering
    var iconEl = $("<i>").addClass("fas fa-save col justify-content-center align-self-center ").attr('data-hour', timeDesc.hours[i])

    //setting append icon element to saveBtnEl container
    var saveBtnEl = $("<div>");

    saveBtnEl.append(iconEl)
    saveBtnEl.addClass("saveBtn button col submit d-flex h-100")
    saveBtnEl.attr('data-hour', timeDesc.hours[i])

    //adding classes for both the displayed hour and input field
    var hourEl = $("<div>").addClass("hour col")
    var inputEl = $("<input>").addClass("form-control-plaintext description col ").attr('id', 'userInput').attr('data-hour', timeDesc.hours[i])

    //appending the complete row to container, adding 9AM - 5PM hour increments on left hand side and adding classHourid number to each input field
    $(mainEl).append(rowEl.clone());
    $(hourEl).text(timeDesc.hours[i]);

    // Displaying colour coded blocks in regards to hour time whether it is the past, preset or future, using grey, green or red.   
    if (i == currentHour - 9) {
        $(inputEl).addClass("present");
    } else if (i < currentHour - 9) {
        $(inputEl).addClass("past");
    } else {
        $(inputEl).addClass("future");

    }
}



// To save user data and retain information when refreshed or returning to the page

//button selector
$(".saveBtn").on('click', function (event) {
    var hour = event.target.getAttribute("data-hour")
    console.log(hour.val())
    console.log(event.target, hour);
})


// links to github repo and depliyed page
// https://github.com/joshuab96/Work-Day-Scheduler.git
// https://joshuab96.github.io/Work-Day-Scheduler/


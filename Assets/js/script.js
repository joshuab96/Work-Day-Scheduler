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
    hours:["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"],
    classHourid:["9","10","11","12","1","2","3","4","5"]
}
// Creating timeblocks via a for loop
// to dynamically append 8 timeblocks 9-5 to html page
// including 

 for (i = 0; i < 10; i++) {

     //setting append hour, input field and savebtn container to the row
    var rowEl = $("<div></div>").addClass("row time-block").append(hourEl,inputEl,saveBtnEl)

    //adding classes to icon element for icon img and centering
    var iconEl = $("<i></i>").addClass("fas fa-save col justify-content-center align-self-center ")

    //setting append icon element to saveBtnEl container
    var saveBtnEl = $("<div></div>").addClass("saveBtn button col submit d-flex h-100").append(iconEl)

    //adding classes for both the displayed hour and input field
    var hourEl = $("<div></div>").addClass("hour col")
    var inputEl = $("<input></input>").addClass("form-control-plaintext description col")
   
    //appending the complete row to container, adding 9AM - 5PM hour increments on left hand side and adding classHourid number to each input field
    $(mainEl).append(rowEl.clone());
    $(hourEl).text(timeDesc.hours[i]);

    // Displaying colour coded blocks in regards to hour time whether it is the past, preset or future, using grey, green or red.   
    if(i == currentHour - 9){
            $(inputEl).addClass("present");
          } else if(i < currentHour - 9){
             $(inputEl).addClass("past");
          } else {
            $(inputEl).addClass("future")
    
}}

//users inputs are saved and remain when the page is refreshed



 
 


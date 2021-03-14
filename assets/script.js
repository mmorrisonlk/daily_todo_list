/* Pretty simple code I borrowed from one of our assignments. First it defines the variable today and
that is defined by whatever moment() returns. It then looks for the ID currentDay in the HTML. Finally,
it sets the text content of currentDay to the Today variable in the format specified
*/
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var workDay = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"]
/* This is where the magic happens (ideally). This for loop creates a new div element in the html with each run through.
This new div element has a div, text area and button element within it. The + i + adds the current i value to the ID.
The goal of that being is that it creates all the elements and is assigning each of them a unique id from the same loop.
*/
for (let i = 0; i < workDay.length; i++) {
    var dailyBlocks = document.getElementById("hourBlocks")
    dailyBlocks.innerHTML += `
    <div class="row descripton time-block">
        <div id="`+ i +`block"class="col-2 border hour">` + workDay[i] + `</div>
        <textarea id="`+ i +`textArea" class="col-8 border textarea past"></textarea>
        <button id="button`+ i +`" class="col-2 border saveBtn">Save Changes</button>
    </div>
    `;
    document.getElementById(i + "textArea").innerHTML = localStorage.getItem("storedItem" + i);

    if (moment().isBefore(moment(workDay[i], "h:mma"))) {
        document.getElementById(i + "textArea").classList.add('future');
    }
    else if (moment().isAfter(moment(workDay[i], "h:mma").add(1, "hours"))) {
        document.getElementById(i + "textArea").classList.add('past');
    }
    else {
        document.getElementById(i + "textArea").classList.add('present');
    }
}
/* I couldn't get this to work as part of the bigger for loop so I just ended up doing it as a second loop back through
the same values. I could have potentially made it work but I think this qualifies as good enough. 
*/
for (let i = 0; i < workDay.length; i++) {
    $("#button" + i).click(function(){
        localStorage.setItem("storedItem" + i, document.getElementById(i + "textArea").value)
    });
}

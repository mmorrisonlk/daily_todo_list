/* Pretty simple code I borrowed from one of our assignments. First it defines the variable today and
that is defined by whatever moment() returns. It then looks for the ID currentDay in the HTML. Finally,
it sets the text content of currentDay to the Today variable in the format specified
*/
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
var hourNow = moment().format("h");
console.log(hourNow);
for (let index = 0; index < 5; index++) {
    document.getElementById("hourBlocks").innerHTML += `
    <div class="row descripton time-block">
        <div class="col-2 border hour"> 9am </div>
        <textarea class="col-8 border textarea past"></textarea>
        <button class="col-2 border saveBtn">What about the wookies?</button>
    </div>
`;
}

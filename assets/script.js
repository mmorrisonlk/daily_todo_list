/* Pretty simple code I borrowed from one of our assignments. First it defines the variable today and
that is defined by whatever moment() returns. It then looks for the ID currentDay in the HTML. Finally,
it sets the text content of currentDay to the Today variable in the format specified
*/
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));
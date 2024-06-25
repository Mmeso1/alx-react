const $ = require("jquery");
const _ = require("lodash");

$("body").append("<p>Holberton Dashboard</p>");
$("body").append("<p>Dashboard data for the students</p>");
$("body").append("<button>Click here to get started</button>");
$("body").append("<p id='count'></p>");
$("body").append("<p>Copyright - Holberton School</p>");

function updateCounter() {
  const count = $("#count").text() || 0;
  $("#count").text(`${parseInt(count) + 1} clicks on the button`);
}

$("button").on(
  "click",
  _.debounce(updateCounter, 300, { leading: true, trailing: false })
);

"use strict";

console.log("App js is running smoothly");
//JSX - Javascript XML
/* var template = (
  <div>
    {" "}
    <h1>Indecision app</h1>
    <p>Here, is some more information</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var appRoot = document.getElementById("root");
ReactDOM.render(template, appRoot);
 */
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Rhytonne Odhiambo"
  ),
  React.createElement(
    "p",
    null,
    "Age:21 "
  ),
  React.createElement(
    "p",
    null,
    "Location:Mombasa, Kenya"
  )
);
var indexRoot = document.getElementById("root");
ReactDOM.render(template2, indexRoot);

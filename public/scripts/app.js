"use strict";

console.log("App js is running smoothly");
//JSX - Javascript XML
var template = React.createElement(
  "h1",
  null,
  "Indecision app"
);

var appRoot = document.getElementById("root");
ReactDOM.render(template, appRoot);

"use strict";

console.log("App js is running smoothly");
//JSX - Javascript XML
var titleApp = {
  title: "Indecision App",
  subtitle: "Here, you will find more information",
  itemLIst: ["Item one", "Item two"]
};
var template = React.createElement(
  "div",
  null,
  " ",
  React.createElement(
    "h1",
    null,
    titleApp.title
  ),
  React.createElement(
    "p",
    null,
    titleApp.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      titleApp.itemLIst[0]
    ),
    React.createElement(
      "li",
      null,
      titleApp.itemLIst[1]
    )
  )
);

var appRoot = document.getElementById("root");
//ReactDOM.render(template, appRoot);

var user = {
  name: "Bridgit Akinyi",
  age: 16,
  location: "Kasarani, Nairobi"
};
function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      "Location: ",
      location
    );
  }
}
/* let userName = "Rhytonne Odhiambo";
let userAge = 21;
let userLocation = "Mombasa, Kenya"; */
var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name.toUpperCase() : "anonymous"
  ),
  React.createElement(
    "p",
    null,
    "Age:",
    user.age,
    " "
  ),
  getLocation(user.location)
);
var indexRoot = document.getElementById("root");
ReactDOM.render(template2, indexRoot);

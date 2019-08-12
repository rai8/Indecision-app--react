console.log("App js is running smoothly");
//JSX - Javascript XML
/* var template = <p>This is our first JSX from app.js</p>; */
var template = React.createElement(
  "h1",
  null,
  "This is our first JSX from app.js"
);
var appRoot = document.getElementById("root");
ReactDOM.render(template, appRoot);

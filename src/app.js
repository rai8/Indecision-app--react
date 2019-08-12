console.log("App js is running smoothly");
//JSX - Javascript XML
let titleApp = {
  title: "Indecision App",
  subtitle: "Here, you will find more information",
  itemLIst: ["Item one", "Item two"]
};
var template = (
  <div>
    {" "}
    <h1>{titleApp.title}</h1>
    <p>{titleApp.subtitle}</p>
    <ol>
      <li>{titleApp.itemLIst[0]}</li>
      <li>{titleApp.itemLIst[1]}</li>
    </ol>
  </div>
);

var appRoot = document.getElementById("root");
//ReactDOM.render(template, appRoot);

let user = {
  name: "Bridgit Akinyi",
  age: 16,
  location: "Kasarani, Nairobi"
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
/* let userName = "Rhytonne Odhiambo";
let userAge = 21;
let userLocation = "Mombasa, Kenya"; */
let template2 = (
  <div>
    <h1>{user.name ? user.name.toUpperCase() : "anonymous"}</h1>
    <p>Age:{user.age} </p>
    {getLocation(user.location)}
  </div>
);
let indexRoot = document.getElementById("root");
ReactDOM.render(template2, indexRoot);

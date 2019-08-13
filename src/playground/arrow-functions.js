function square1(x) {
  return x * x;
}
console.log(square1(15));
const square = function(x) {
  return x * x;
};
console.log(square(8));
const sqauareArrow = x => x * x;
console.log(sqauareArrow(7));
//challenge

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Rhytonne Odhiambo"));

const getLastName = fullName => fullName.split(" ")[1];
console.log(getLastName("Rhytonne Odhiambo"));

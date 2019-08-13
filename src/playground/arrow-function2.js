//arguements object- this is no longer bound to arrow functions, this will mean that we will not have access to the arguement list

const addition = function(a, b) {
  console.log(arguments);
  return a + b;
};
console.log(addition(55, 1));
const add = (a, b) => a + b;
//console.log(arguments);- if this is put it would throw an arrow arguement is not defined

console.log(add(55, 24));
// this keyword is no longer bound with arrow functions

const user = {
  name: "Rhytonne",
  cities: ["Mombasa", "Nairobi", "Kisumu"],
  printName() {
    console.log(this.name);
    console.log(this.cities);
    // to get away with the error we introduce a constant and assign it to this
    const that = this; // if we dont want to introduce that constant we can apply the arrow function and still use this, it will give no error
    this.cities.forEach(function(city) {
      console.log(that.name + " has liven in " + city);
    });
  }
};
user.printName();
//challenge
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 4,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};
console.log(multiplier.multiply());

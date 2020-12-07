/**
 * Welcome to Old McDonald's farm.  In this exercise we're going to create a digital
 * representation of the McDonald family farm.
 * Requirements:
 *  1. Create programmatic representations of our barnyarn friends.  This structure is
 *    totally up to you.  Feel free to get creative and use the tools you have available
 *    and any stategy you can think of.
 *  2. Create a "barnyard" programmatic representation.  This model should contain "pens"
 *    for the animals to live.
 *  3. Introduce a basic way of interacting with the animals in our barnyard.  For example,
 *    create a button on the page that would pet the animals which in turn would make a
 *    "noise", (in this case it would print something in the HTML).  Get creative here!
 *    I'd love to see the unique solutions you come up with!
 */

import "./styles.css";
let animals = {
  pig: "oink",
  cow: "moo",
  horse: "neigh"
};

class Animal {
  constructor(animalName, animalSound) {
    this.name = animalName;
    this.sound = animalSound;
    // array that stores all instances upon initialization
    Animal.all = Animal.all ? Animal.all : [];
    Animal.all.push(this);
  }

  init() {}
}

Object.keys(animals).forEach((animal) => {
  new Animal(animal, animals[animal]);
});

// create a button to host each animal
Animal.all.forEach((animal, index) => {
  const button = document.createElement("button");
  const pen = document.getElementById(`pen${index + 1}`);
  button.innerHTML = animal.name;
  button.addEventListener("click", () => animalSound(pen, animal));
  pen.append(button);
});

// display animal sound on button click
function animalSound(pen, animal) {
  const sound = document.createElement("h3");
  sound.style = "color:green";
  sound.innerText = `${animal.sound}...`;
  pen.append(sound);
  setTimeout(() => {
    document.querySelector("h3").remove();
  }, 3000);
}

function showPet() {
  alert("Here are the pets in our system!")
  for (let pet of pets) alert(pet.name + " is a " + pet.age + " year old " + pet.species + ".")
  //outputs the array of pets for the user
}
//maybe write it so it says: 'name' is a 'age' year old 'species'

let pets = [
  { name: "Buddy", age: 4, species: "Dog" },
  { name: "Coco", age: 7, species: "Cat" },
  { name: "Cotton", age: 2, species: "Sheep" },
  { name: "Duke", age: 1, species: "Fish" },
  { name: "Buddy", age: 6, species: "Horse" },
]
//the array contains the names, age, and species of the pets
//they used to be just strings but now they are changed to objectfs

function addPet() {
  alert("Add a new pet to the system! Enter its details here.")
  let name = prompt("What is the name of the pet?")
  let age = prompt("What is " + name + "'s age?")
  let species = prompt("What is " + name + "'s species?")
  let pet = {
    name: name,
    age: age,
    species: species,
  }
  pets.push(pet)
  //asks the user for the name, age, and species of a new pet
  //then it makes a new object which is then pushed to the array of pets
}

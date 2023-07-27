function showPet() {
  alert("Here are the pets in our system!")
  for (let pet of pets) alert(pet.name + " is a " + pet.age + " year old " + pet.species + ".")
  //outputs the array of pets for the user
  //maybe write it so it says: 'name' is a 'age' year old 'species'
}

let pets = [
  { name: "Buddy", age: 4, species: "dog" },
  { name: "Coco", age: 7, species: "cat" },
  { name: "Cotton", age: 2, species: "sheep" },
  { name: "Duke", age: 1, species: "fish" },
  { name: "Buddy", age: 6, species: "horse" },
]
//the array contains the names, age, and species of the pets
//they used to be just strings but now they are changed to objects

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

function searchPet() {
  alert("Search for a pet!")
  let searchName = prompt("Enter the name of the pet you want to find in the system.")
  let searchResult = "is not in the system"
  for (let pet of pets) {
    if (pet.name == searchName) {
      searchResult = "is in the system"
    }
  }
  alert(searchName + " " + searchResult)
  //the searches for a pet in the system
  //asks the user for the name of the pet and outputs if the pet is in the system or not
  //the result starts off with being 'not in the system'
  //if the name inputed buy the user matches any name from the pet array the result is changed to 'in the system'
}

function removePet() {}

//to do: -removing specific object from array (Number search / for...of   if   splice)

let petName = ["Buddy", "Bear", "Daisy", "Coco", "Duke"]
//the array contains the names of the pets

function addPet() {
  let newPetName = prompt("Add a new pet: What is the name of the pet?")
  petName.push(newPetName)
  //asks the user for the name of a new pet and code adds it to the array
}

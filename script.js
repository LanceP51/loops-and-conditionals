// ------------------------------- LIGHTNING EXERCISE ------------------------------//

// Instantiate and assign a variable called `myName` that holds the value of your name as a string
// Instantiate and assign a variable called `numberOfPets` that stores the number of pets you have as a number.
// Instantiate and assign a variable called `birthday` that holds your birthday as a string
// Use string interpolation to build a sentence about yourself using the three variables you just created
// Log the sentence to the console
var myName= "Lance"
var numberOfPets= 2
var birthday= "Mar 31, '89"
var mySentence= `Hi, my name is ${myName}, I have ${numberOfPets} pets, and my birthday is on ${birthday}.`
console.log (mySentence)

//------------------------------- LIGHTNING EXERCISE-----------------------//
// Create an array of your pet names
// Use square bracket notation to log each of your pet's names to the console.
var myPetsArray=["larry the woodchuck", "dan the woodchuck"]
console.log(myPetsArray[0], myPetsArray[1])

// ------------------------- lightning exercises --------------------//
// Given two options of data structures - array or object - which should you use? You need to represent a red 2015 Ford Mustang in your code.
carObject = {
    make: "Ford",
    model: "Mustang",
    year: "2015",
    color: "red"
}
// Given two options of data structures - array or object - which should you use? You need to store list of animal names in a shelter. The names are "Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", and "Sharky".
shelterPetName = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts","Sharky"]
// Define an object for four family members, and put each object in an array named familyMembers. Each family member object that you create should have the same keys on them, but the values will be different.
familyMembers = [
    {
        name: "Tom",
        age: 42,
        relation: "uncle"
    },
    {
        name: "BoBo",
        age: 56,
        relation: "dad"
    },
    {
        name: "Shawn",
        age: 34,
        relation: "brother"
    },
    {
        name: "Freda",
        age: 20,
        relation: "neice"
    }
]
// Given the object below, output the wardrobe's width to the console
// Output its manufacturer
// Output the first item in its `contents` array to the console
var wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
  };
  console.log (wardrobe.width)
  console.log (wardrobe.manufacturer)
  console.log (wardrobe.contents[0])

  //---------------------Lightning Exercise---------------------
//    Print each value in the array to the console using a for loop
var alumni = [
    "Nick",
    "Charles",
    "Nikki",
    "Dale",
    "Tommy",
    "Connor",
    "Sable",
    "Sydney",
    "Josh",
    "Joey",
    "Matt",
    "David",
    "Russ",
    "Bobby"
  ]
  for (var i=0; i<alumni.length; i++){
      console.log (alumni[i])
  }
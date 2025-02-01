// Object to store the user input
const userData = {}

// Prompt the user for input and store it in the object
userData.prompt = prompt(
  'Hey there FROYO lover!  Please enter your desired flavors separated by commas.',
  'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
)
console.log(userData.prompt) 

// Display the stored object in console as an array
const flavorArray = userData.prompt.split(',')
console.log(flavorArray)

//creating the objects to count how many flavors and identify the flavor
let vanillaCount = 0
for (let i = 0; i < flavorArray.length; i++) {
  if (flavorArray[i] === 'vanilla') {
    vanillaCount++
  }
}

let strawberryCount = 0
for (let i = 0; i < flavorArray.length; i++) {
  if (flavorArray[i] === 'strawberry') {
    strawberryCount++
  }
}

let coffeeCount = 0
for (let i = 0; i < flavorArray.length; i++) {
  if (flavorArray[i] === 'coffee') {
    coffeeCount++
  }
}

//Object to show name:value of each flavor to be input into console.table to create table
const flavorInputs = {
  vanilla: vanillaCount,
  coffee: coffeeCount,
  strawberry: strawberryCount
}

// for (let i = 0; i < userData.flavors; i++) {}
console.table([flavorInputs])

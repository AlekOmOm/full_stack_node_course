const my_name = 'mit navn'

// console.log(my_name)

const hobbies = ["sleeping", "coding"]

hobbies.pop() // Remove the last element from the hobbies array

hobbies.push("drawing", "painting") // Add new elements to the hobbies array

console.log(hobbies)

const dancerName = "Computer"

// Demonstrating different ways to use quotes in strings
console.log("I can't compile !")
console.log('I can "compile" !')
console.log(`I can dance ""*'''`)  // Using template literals
console.log(`I ${2+2} can dance "" *'''`)  // Using template literals with expression

// "" or '' or `` = string literals
// `` = template literals
// ${} syntax = string interpolation
console.log(`I ${dancerName} can dance `) // Using template literals with variable
console.log("I ${dancerName} can dance ") // Using double quotes
console.log('I ${dancerName} can dance ') // Using single quotes

// Demonstrating the difference between using + and , for concatenation
const assignmentDescription = "...and the value is..."
const value = 4


// diff: type courcion, -> don't use plus in console.log to avoid type coercion
   // especially since console.log is used for developers and typically in debugging
console.log(assignmentDescription + value) // Using + for concatenation (results in a single string)
console.log(assignmentDescription, value) // Using , for concatenation (results in multiple arguments being logged)




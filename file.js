// Create an object that represents a person with name, age, and occcupation.
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
};

// Function to print person properties and values
function printPersonDetails(person) {
    for (let prop in person) {
        console.log(prop + ": " + person[prop]);
    }
}

// Call the function to print person details
printPersonDetails(person);

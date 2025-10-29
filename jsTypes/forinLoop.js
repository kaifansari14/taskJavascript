        // JavaScript for...in loop
// Here's a simple example of the for...in loop in JavaScript. Read the rest of the tutorial to learn more.

// Example

const student ={
    name: "monic",
    class: 7
};

// loop throught the keys of student object 
for (let key in student) {
     
    // display the key-value pairs 
    console.log(`${key}=> ${student[key]}`);
};

// Output
// name => Monica
// class =>7


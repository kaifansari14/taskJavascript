            //JavaScript Data Types
    // Data types represent the different kinds of values we can use in JavaScript.

//There are altogether 8 basic data types in JavaScript.

/*
Data Type  |          Description	                             |          Example                 |
-----------|-----------------------------------------------------|----------------------------------|
String	   |    Textual data.	                                 |   'hello', "hello world!", etc.  |
Number	   | An integer or a floating-point number.              |  	3, 3.234, 3e-2, etc.        |
BigInt     |    An integer with arbitrary precision.             | 	900719925124740999n, 1n, etc.   |
Boolean    |	Any of two values: true or false.	             |       true and false             |
undefined  | A data type whose variable is not initialized.      |       	let a;                  |
null	   | Denotes a null value.	                             |         let a = null;            |
Symbol	   |A data type whose instances are unique and immutable.|	let value = Symbol('hello');    |
Object	   |Key-value pairs of collection of data.	             |   let student = {name: "John"};  |
*/

                // JavaScript String
        // A string represents textual data. It contains a sequence of characters. For example, "hello", "JavaScript", etc.

// In JavaScript, strings are surrounded by quotes:
/*
• Single quotes: 'Hello'
• Double quotes: "Hello"
• Backticks: `hello`
for example,
*/
  // string enclosed within single quotes
  let fruit = 'apple';
  console.log(fruit);

  // string enclosed within double quotes 
  let country = "USA";
  console.log(country);

  // string  encolosed witin backticks 
  let result = `fail`;
  console.log(result);

        /*
                // JavaScript Number
            //In JavaScript, the number type represents numeric values (both integers and floating-point numbers).
    
      //  • Integers - Numeric values without any decimal parts.
      Example: 3,-74, etc 

      //  • Floating-Point - Numeric Value with decimeal parts.
     Example: 3.15, -1.3, etc
*/

// Integers value 
let integer_number = -3;
console.log(integer_number);

// Floating-Point value
let float_number = 3.15;
console.log(float_number);

                //  JavaScript BigInt
        //BigInt is a type of number that can represent very large or very small integers beyond the range of the regular number data type.
   // A BigInt number is created by appending n to the end of an integer. For example,
  
// BigInt value 
let value1 = 900719925124740998n;

// Add two big integers 
let result1 = value1 + 1n;
console.log(result1);  // "900719925124740998n"

let value2 = 900719925124740998n;
                        // JavaScript Boolean
        // A "Boolean" data can only have one of two values: "true" or "false". For example,

        let dataChecked = true;
        console.log(dataChecked); // true 

        let valueCounted = false; 
        console.log(valueCounted); // fales

                        // JavaScript undefined
        // In JavaScript, "undefined" represents the absence of a value.
// If a variable is declared but the value is not assigned, then the value of that variable will be "undefined". For example,

        let name;
        console.log(name);  // undefined

// It is also possible to explicitly assign "undefined" as a variable value. For example,

            let name1 = undefined;
            console.log(name1);  // undifined 
            
            // JavaScript null
   // In JavaScript, `null` represents "no value" or "nothing." For example,

            let number = null;
            console.log(number);  //null 
    //Here, let number = null; indicates that the number variable is set to have no value.

                // JavaScript Symbol
// A `Symbol` is a unique and primitive value. This data type was introduced in ES6.
// When you create a `Symbol`, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions. For example,

// Two symbols with the same description 
            let value3 = Symbol("programiz");
            let value4 = Symbol("programiz");
    console.log(value3 === value4);   // false
// Here, we have used === to compare value1 and value2. It returns true if the two values are exactly the same. Otherwise, it returns false.

/*Though both value1 and value2 contain "programiz", JavaScript treats them as different since they are of the Symbol type. Hence, value1 === value2 returns false.
*/
                //  JavaScript Object
       // An Object holds data in the form of key-value pairs. For example,
 let student = {
     firstName: "kaif",
     lastName: null,
     class: 12 
 };
        //Here, we have created an object named student that contains key-value pairs:










        
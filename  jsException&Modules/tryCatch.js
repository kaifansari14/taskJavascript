/*
            JavaScript try...catch...finally Statement
The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.

Types of Errors
In programming, there can be two types of errors in the code:

Syntax Error: Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.

Runtime Error: This type of error occurs during the execution of the program. For example,
calling an invalid function or a variable.


These errors that occur during runtime are called exceptions. Now, let's see how you can handle these exceptions.

JavaScript try...catch Statement
The try...catch statement is used to handle the exceptions. Its syntax is:

try {
    // body of try
} 
catch(error) {
    // body of catch  
}
The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.

If no error occurs, the code inside the try block is executed and the catch block is skipped.

Example 1: Display Undeclared Variable
*/

// program to show try...catchin a program

const numerator = 100, denominator = `a`;

try {
    console.log(numerator/denominator);

    // forgot to define variable a 
    console.log(a);
}
catch (error) {
    console.log(`An error cautch`);
    console.log(`Error message:`+ error);

}
/*
In the above program, a variable is not defined. When you try to print the a variable, the program throws an error. That error is caught in the catch block.

JavaScript try...catch...finally Statement
You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.

The syntax of try...catch...finally block is:

try {
    // try_statements
} 
catch(error) {
    // catch_statements  
}
finally() {
    // codes that gets executed anyway
}
Example 2: try...catch...finally Example
*/

const numberator1 = 100, denominator1 =`a`;

try {
    console.log(numberator1/denominator1);
    console.log(a);
}
catch(error){
    console.log(`An error caught`);
    console.log(`Error message: `+ error);
}
finally {
    console.log(`Finally will execute every time`);
}

/*

    JavaScript try...catch in setTimeout
The try...catch won't catch the exception if it happened in "timed" code, like in setTimeout(). For example,

try {
    setTimeout(function() {
        // error in the code
    }, 3000);
} catch (e) {
  console.log( "won't work" );
}
The above try...catch won't work because the engine has already left the try..catch construct and the function is executed later.

The try..catch block must be inside that function to catch an exception inside a timed function. For example,

setTimeout(function() {
    try {
        // error in the code
    } catch {
        console.log( "error is caught" );
    }
}, 3000);

*/

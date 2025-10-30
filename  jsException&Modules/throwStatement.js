/*

        JavaScript throw Statement
In the previous tutorial, you learned to handle exceptions using JavaScript try..catch statement. The try and catch statements handle exceptions in a standard way which is provided by JavaScript. However, you can use the throw statement to pass user-defined exceptions.

In JavaScript, the throw statement handles user-defined exceptions. For example, if a certain number is divided by 0, and if you need to consider Infinity as an exception, you can use the throw statement to handle that exception.

        JavaScript throw statement
The syntax of throw statement is:

throw expression;

Here, expression specifies the value of the exception.

for example,
*/
// const number = 5;
// throw number/0; // generate an exception when divided by 0


/*
        JavaScript throw with try...catch 
    The syntax of try...catch...throw is: 
*/

try {
    // body of try 
    throw exception;
}
catch(error) {
    // body of catch 
}

//Example 1: try...catch...throw Example

const number1 = 40;
try {
    if(number > 50 ) {
        console.log(`Success`);
    }
    else {
        // user-defined throw statement 
        throw new Error(`The number is low`);
    }

    // if throw executes, the below code does not execute 
    console.log(`Hello`);
}
catch (error) {
    console.log(`An error caught`);
    console.log(`Error message: ` + error);
}
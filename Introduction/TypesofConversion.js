                // JavaScript Type Conversion

/*
In programming, type conversion is the process of converting data of one type to another. For example, converting string data to number.
             There are two types of type conversion in JavaScript:
            • Implicit Conversion - Automatic type conversion.
            • Explicit Conversion - Manual type conversion.
                JavaScript Implicit Conversion

In certain situations, JavaScript automatically converts data of one type to another (to the right type). This is known as implicit conversion. For example, */

// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));
/*   here 
• "3" + 2 - Converts the number 2 to string and joins it to "3", resulting in the string "32".
• "3" + true - Converts the boolean true to string and joins it to "3", resulting in the string
"3true".
• "3" + null - Converts null to string and joins it to "3", resulting in the string "3null". */

                    // JavaScript Explicit Conversion
/* 
In explicit type conversion, you manually convert one type of data into another using built-in functions. For example,*/ 

let result1;

// convert string to number
result1 = Number("5");
console.log(result1, "-", typeof(result1));

// convert boolean to string
result1 = String(true);
console.log(result1, "-", typeof(result1));

// convert number to boolean
result1 = Boolean(0);
console.log(result1, "-", typeof(result1));
/*
here 
• Number("5") changes the string "5" into the number 5.
• String(true) turns the boolean true into the string "true".
• Boolean(0) converts the number 0 to the boolean false because 0 is considered a falsy value in JavaScript.
*/







   
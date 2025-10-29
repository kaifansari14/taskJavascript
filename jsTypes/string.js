/*
        JavaScript String
The JavaScript string is a primitive data type that represents textual data. For example,

let name = "John";
Create JavaScript Strings
In JavaScript, we create strings by surrounding them with quotes or backticks.

Single Quotes   	'Hello'
Double Quotes   	"Hello"
Backticks       	`Hello`

Single quotes and double quotes are practically the same, and you can use either of the two.

Backticks are generally used when you need to insert variables or expressions into a string. This is done by wrapping variables or expressions with ${variable or expression}. For example,
*/

// strings example
let name1 = 'Peter';
let name2 = "Jack";
let result = `The names are ${name1} and ${name2}`;

console.log(result);

// Output: The names are Peter and Jack 

/*
        Access String Characters
You can access the characters in a string in two ways:

1. Using Indexes

One way is to treat strings as an array and access the character at the specified index. For example,
*/

let message = "hello";

// Use index 1 to access 
// 2nd character of message 
console.log(message[1]);  // e

/*
here, the code message[1] gives us the chartacter at index 1 of the message string, i.e., its second character.

2. Using the charAT() Method:-

Another way is to supply the position of the charactor to the charAT() method. For example,
*/

let message1 = "baby";

// Use charAT(1) to get the 
// 2nd charactor of message 
console.log(message.charAt(2));  // e

// Here, the code message.charAt(1) gives us the character at index 1 of the message string.

/*
            Features of JavaScript Strings
JavaScript strings have some interesting features. The most important of these features are:

1. JavaScript Strings are Immutable

In JavaScript, the characters of a string cannot be changed. For example,
*/
let message2 = "love";
message2 [0] = "L"
console.log(message2); // love

/* 
In the above example, we tried changing the first character of message using the code:

message[0] = "H";
However, this operation failed due to the immutable nature of JavaScript strings.

That being said, you can successfully assign a new value to the string variable. For example,
*/

let message3 = "heyy";
message3 = "heyy";
console.log(message3); // heyy

/*
2. JavaScript Strings are Case-Sensitive

In JavaScript., the lowercase and uppercase letters are treated as different values. For example,

*/
 let value1 = "A";
 let value2 = "a"
 console.log(value1 == value2); // false
    
/*

                                        JavaScript String Methods

Method         |         	Description
charAt()	   |     Returns the character at the specified index.
concat()	   |     Joins two or more strings.
replace()	   |     Replace a string with another string.
split()        | 	 Converts the string to an array of strings.
substr()	   |     Returns a part of a string by taking the starting position and length of the substring.
substring()    | 	 Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
slice()	       |     Returns a part of the string from the specified start index (inclusive) to the end index (exclusive).
toLowerCase()  |     Returns the passed string in lowercase.
toUpperCase()  |     Returns the passed string in uppercase.
trim()	       |     Removes whitespace from the strings.
includes()     | 	 Searches for a string and returns a boolean value.
search()	   |     Searches for a string and returns the position of a match.

Example: JavaScript String methods
*/

let text1 = "hello";
let text2 = "world";
let text3 = "     JavaScript     ";

// Concatenate two strings 
let result1 = text1.concat(' ', text2);
console.log(result1);  // hello world 

// Convert the text to uppercase 
let result2 = text1.toUpperCase();
console.log(result2); // HELLO 

// Remove whitespace from the string 
let result3 = text3.trim();
console.log(result3);  // JavaScript

// Convert the string to an array 
let result4 = text1.split();
console.log(result4); // ['hello']

// Slice the string
let result5 = text1.slice(1,3);
console.log(result5);  // el


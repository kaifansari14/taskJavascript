                //  JavaScript Operators
        /*
                JavaScript operators are special symbols that perform operations on one or more operands (values). For example, */

                 //   2 + 3; // 5
          //     Here, we used the + operator to add the operands 2 and 3.

                //  JavaScript Operator Types
      // Here is a list of different JavaScript operators you will learn in this tutorial:
    /*
   1. Arithmetic Operators 
   2. Assignment Operators
   3. Comparison Operators
   4. Logical Operators
   5. Bitwise Operators
   6. String Operators
   7. Miscellaneous Operators
 /*
                    // 1. JavaScript Arithmetic Operators
                We use arithmetic operators to perform arithmetic calculations like addition, subtraction, etc. For example,*/
                  //  5 - 3;  //2
               //     Here, we used the - operator to subtract 3 from 5.

                //Commonly Used Arithmetic Operators



//                Example 1: Arithmetic Operators in JavaScript

let x = 5;

// Adding Operator
let Adding =x 
console.log("Adding: x + 3 =", x + 3);

// Subtraction Operator 
let Subtraction = x
console.log("subtration: x - 3 =", x - 3);

// Multipiliction Operator
let Multipilication = x 
console.log("Multipilication:, x * 3 =", x * 3);

// Division Operator 
let Division = x 
console.log("Division: x / 3 =", x / 3);

//Remainder operator 
console.log("Remainder: x $ 3 =", x % 3);

// Increment Operator
let Increment = x  
console.log("Increment: ++x = "), ++x;

// Decrememt Operator
let Decrememt = x  
console.log("Decrement: --x =", --x);

// Expontiation Operator 
let Expontiation = x 
console.log("Expontitaion: x ** 3 =", x ** 3);

                        // 2. JavaScript Assignment Operators
    // We use assignment operators to assign values to variables. For example,
 //   let x = 5;
 //   Here, we used the = operator to assign the value 5 to the variable x.

                   // Commonly Used Assignment Operators
/*
--------------------------------------------------------------------|
Operator    |      Name	                 |           Example        |
------------|----------------------------|--------------------------|
=	        |Assignment Operator	     |   a = 7;                 |
+=         	| Addition Assignment	     |   a += 5;  // a = a + 5  |
-=	        |Subtraction Assignment      |  a -= 2;  // a = a - 2   |
*=	        |Multiplication Assignment	 |   a *= 3;  // a = a * 3  |
/=	        | Division Assignment	     |   a /= 2;  // a = a / 2  |
%=	        | Remainder Assignment	     |   a %= 2;  // a = a % 2  |
**=	        | Exponentiation Assignment  |	a **= 2;  // a = a**2   |
--------------------------------------------------------------------|
*/
// assigment operator
                let a = 7;
                console.log("Assigment : a = 7, a =", a);
// addition assignment operator 
      a += 5;  //a = a + 5
      console.log("Addition Assignment: a += 5, a =", a);
// subtration assignment operator 
     a-= 5; // a = a - 5 
     console.log("Subtraction Assignment: a -= 5, a =", a);
// multiplication assignment operator 
     a *= 2; // a = a * 2
     console.log("Multiplication Assignment: a *= 2, a =", a);
// division assignment operator 
     a /=2; // a = a / 2
    console.log("Division Assignment: a /= 2, a =", a);
// remainder assignment operator
    a %= 2; // a = a % 2
    console.log("Remainder Assignment: a %= 2, a =", a);
// exponention assignmrnt operator 
    a **= 2 // a = a**2
    console.log("Exponention Assignment: a **= 7, a =", a);
                
                  // 3. JavaScript Comparison Operators
        // We use comparison operators to compare two values and return a boolean value (true or false). For example,

                const c = 3, b = 2;
                console.log(c > b);

                // Output : true
   // Here, we have used the > comparison operator to check whether a (whose value is 3) is greater than b (whose value is 2).
//                  Commonly Used Comparison Operators
/*
Operator	|     Meaning	             |          Example            |
----------|--------------------------------------------------------|
==        | 	Equal to	             |3 == 5  gives us false       |
!=	      | Not equal to	           |3 != 4 gives us true         |
>	        | Greater than	           | 4 > 4 gives us false        |
<	        | Less than	               |   3 < 3 gives us false      |
>=	      |Greater than or equal to	 | 4 >= 4 gives us true        |
<=	      |Less than or equal to	   | 3 <= 3 gives us true        |
===	      |Strictly equal to         |	3 === "3" gives us false   |
!==	      |Strictly not equal to     |	3 !== "3" gives us true    |  */
 
     //        Example 3: Comparison Operators in JavaScript

    // equal to opeeator
    console.log("Equal to: 2 == 2 is ", 2 == 2);
  
    // not equal to operator 
    console.log("Not equal to: 3 != 3 is ", 3 != 3);
    // strictl equal to operator 
    console.log("Strictly not equal to: 2 === '2' is", 2 === '2');
    
    // strictly not equal operator 
    console.log("Strictly not equalto:");

    // grerater than operator 
    console.log("Greater than: 3 > 3 is , 3 > 3 ")
    
     // less than operator 
     console.log("Less than 2 > 2is,");

     // greater than or equal to operator ;
     console.log("Greater than or equal to: 3 > 3 is", 3 > 3);

    // less than operator
    console.log("Less than: 2 > 2 is ", 2 > 2);
      
    //  greater than or equal to operator
    console.log("Greater than or equal to: 3 > 3 is", 3 >= 3);

    // less than or equal to operator
    console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

                //  4. JavaScript Logical Operators
//We use logical operators to perform logical operations on boolean expressions. For example,

const k = 5, f =3;
console.log((k < 6) && (f < 5 ));

// Output : true 
                      // Commonly Used Logical Operator
/*
Operator        |          	Syntax	        |                 Description                           |
----------------|---------------------------|-------------------------------------------------------|
&& (Logical AND)|expression1 && expression2	|true only if both expression1 and expression2 are true |
|| (Logical OR)	| expression1 || expression2|true if either expression1 or expression2 is true      |
! (Logical NOT)	| !expression	|               false if expression is true and vice versa            | */

                            //  Example 4: Logical Operators in JavaScript

   let y = 3;

// logical AND
console.log((y < 5) && (y > 0));  // true
console.log((y < 5) && (y > 6));  // false

// logical OR
console.log((y > 2) || (y > 5));  // true
console.log((y > 3) || (y < 0));  // false

// logical NOT
console.log(!(y == 3));  // false
console.log(!(y < 2));  // true

/* 

        JavaScript Array
An array is an object that can store multiple values at once.

const age = [17, 18, 15, 19, 14];
In the above example, we created an array to record the age of five students.

        Why Use Arrays?
Arrays allow us to organize related data by grouping them within a single variable.

Suppose you want to store a list of fruits. Using only variables, this process might look like this:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Orange";
Here, we've only listed a few fruits. But what if we need to store 100 fruits?

For such a case, the easiest solution is to store them in an array.

let fruits = ["Apple", "Banana", "Orange", ...];
An array can store many values in a single variable, making it easy to access them by referring to the corresponding index number  

        Create an Array
We can create an array by placing elements inside an array literal [], separated by commas. For example,

const numbers = [10, 30, 40, 60, 80];
Here,

 • Numbers - Name of the array.
 • [10, 30, 40, 60, 80] - Elements of the array.
  
 We can use an array index to access the elements of the array.

Code	            Description
numbers[0]	        Accesses the first element 10.
numbers[1]	        Accesses the second element 30.
numbers[2]	        Accesses the third element 40.
numbers[3]	        Accesses the fourth element 60.
numbers[4]	        Accesses the fifth element 80.

Let's look at an example. */

let numbers = [10, 30, 40, 60, 80]

// access first element
console.log(numbers[0]);  // 10

// access third element
console.log(numbers[2]);  // 40
/*
        Add Element to an Array
We can add elements to an array using built-in methods like push() and unshift().

1. Using the push() Method

The push() method adds an element at the end of the array.

*/

let dailyActivities = ["eat", "sleep"];

// add an element at the end
dailyActivities.push("exercise");

console.log(dailyActivities);

// Output: [ 'eat', 'sleep', 'exercise' ]

//2. Using the unshift() Method

// The unshift() method adds an element at the beginning of the array.


let dailyActivities1 = ["eat", "sleep"];

// add an element at the beginning
dailyActivities.unshift("work"); 

console.log(dailyActivities1);

// Output: [ 'work', 'eat', 'sleep' ]

 /*
            Change the Elements of an Array
We can add or change elements by accessing the index value. For example,
*/

let dailyActivities2 = [ "eat", "work", "sleep"];

// change the second element
// use array index 1
dailyActivities[1] = "exercise";

console.log(dailyActivities2);

// Output: [ 'eat', 'exercise', 'sleep' ]

/*
            Remove Elements From an Array
We can remove an element from any specified index of an array using the splice() method.
*/
let numbers1 = [1, 2, 3, 4, 5];

// remove one element
// starting from index 2
numbers1.splice(2, 1);

console.log(numbers1);

// Output: [ 1, 2, 4, 5 ]

/*
In this example, we removed the element at index 2 (the third element) using the splice() method.

Notice the following code:

numbers.splice(2, 1);
Here, (2, 1) means that the splice() method deletes one element starting from index 2.

Note: Suppose you want to remove the second, third, and fourth elements. You can use the following code to do so:

numbers.splice(1, 3);


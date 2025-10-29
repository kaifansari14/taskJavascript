/*
        JavaScript Multidimensional Array
In JavaScript, multidimensional arrays contain another array inside them.
*/
// multidimensional array
// contains 3 separate arrays as elements
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

console.log(data);

// Output : [ [ 1, 2, 3 ], [ 1, 3, 4 ], [ 4, 5, 6 ] ]

/*
        Use Existing Arrays as Elements
We can also create multidimensional arrays by nesting existing arrays within them. For example,
*/
// declare three arrays
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// create multidimensional array
// using student1, student2, and student3
let studentsData = [student1, student2, student3];

// print the multidimensional array
console.log(studentsData);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23 ], [ 'Peter', 24 ] ]

/*
Here, we first created three arrays named student1, student2, and student3.

We then nested these three arrays within the studentsData array to create our multidimensional array:

let studentsData = [student1, student2, student3];


            Access Elements of an Array
You can access the elements of a multidimensional array using array indexes. For example,
*/

let x = [
['kaif', 24],
['Sara', 23], 
['panda', 24]
];

// access the first item 
console.log(x[0]);  // [ 'Jack', 24 ]

// access the first item of the first inner array
console.log(x[0][0]);  // Jack

// access the second item of the third inner array
console.log(x[2][1]);  // 24

/*
        Add Elements to a Multidimensional Array
You can use an index notation or the push() method to add elements to a multidimensional array.

1. Using Index Notation
*/
let studentsData1 = [["Jack", 24], ["Sara", 23]];

// add "hello" as the 3rd element
// of the 2nd inner array
studentsData1[1][2] = "hello";

console.log(studentsData1);

// Output: [ [ 'Jack', 24 ], [ 'Sara', 23, 'hello' ] ]

/*
2. Using the push() Method

The push() method inserts an element at the end of the array. For example,
*/

let studentsData2 = [["Jack", 24], ["Sara", 23]];

// add element to the end of the outer array
studentsData2.push(["Peter", 24]);

console.log(studentsData2);

// add "hello" as the final element
// of the 2nd inner array
studentsData2[1].push("hello");

console.log(studentsData2);
/*
Remove Elements From a Multidimensional Array
You can use the splice() method to remove an element from any position in the multidimensional array. For example,
*/

let studentsData3 = [['Jack', 24], ['Sara', 23],];

// remove one element
// starting from index 0
studentsData3.splice(0,1);

console.log(studentsData3);

// Output: [ [ 'Sara', 23 ] ]


/*
In the above program, studentsData.splice(0,1) removes the first element of the multidimensional array. Here,

0 - The start index from where to modify the array.
1 - The number of elements to delete.
If you want to delete both arrays, you can use the code studentsData.splice(0,2).


        Iterate Over Multidimensional Array
In JavaScript, you can use nested loops to go through a multidimensional array: one loop for the outer array and another loop inside it for the inner arrays. For example,
*/

let studentsData4 = [["Jack", 24], ["Sara", 23]];

// loop over outer array
for(let i = 0; i < studentsData4.length; i++) {

    // loop over inner array elements
    for(let j = 0; j < studentsData4[i].length; j++) {
        console.log(studentsData4[i][j]);
    }
}


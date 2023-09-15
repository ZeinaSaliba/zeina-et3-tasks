# JavaScript Array Methods

This README provides an overview of several important JavaScript array methods, including `filter`, `forEach`, `find`, `sort`, and `reduce`, along with examples of how to use them. These methods are powerful tools for working with arrays in JavaScript, allowing you to perform various operations, such as filtering, iterating, finding elements, sorting, and reducing.

## `Array.reduce`

The `Array.reduce` method in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

## `Array.map`

The `Array.map` method is a function that loops over an array and returns a new array with different objects.

**Example:**

```javascript
const fweke = ['apple', 'banana', 'orange'];

const newArray = fweke.map((fruit) => {
  return `I like ${fruit}`;
});

console.log(newArray);

// Output:
// [ 'I like apple', 'I like banana', 'I like orange' ]

##Array.filter

The Array.filter method is an iterative method. It calls a provided callback function once for each element in an array and constructs a new array of all the values for which the callback function returns a truthy value. Array elements that do not pass the callback test are not included in the new array.

const filteredNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to keep only even numbers
const evenfilteredNumber = filteredNumber.filter((number) => number % 2 === 0);

console.log(evenfilteredNumber);

// Output: [2, 4, 6, 8, 10]

It returns all the even numbers of the array by using the filter method to check if each number divided by 2 equals 0. If the condition is true, the number is included in the new array; otherwise, it is excluded.

##Array.forEach

The Array.forEach method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

const fruits = ['apple', 'banana', 'orange'];

// Using forEach to log each fruit to the console
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Output:
// apple
// banana
// orange
We use the forEach method to iterate over each element in the fruits array and perform an action (log each fruit) for each item.

##Array.find
The Array.find method returns the value of the first element in an array that passes a test. It executes a function for each array element. If no elements pass the test, it returns undefined. It does not execute the function for empty elements.

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];

// Using find to find a user by name
const targetName = 'Bob';
const foundUser = users.find((user) => user?.name === targetName);

if (foundUser) {
  console.log(`Found user: ${foundUser?.name}`);
} else {
  console.log('User not found');
}

// Output: Found user: Bob
In this example, find is used to search for a user with the name 'Bob' in the users array and returns the first matching user object.

##Array.sort

The Array.sort method is used to sort the elements of an array in place. By default, it sorts elements as strings in alphabetical order (ascending).

const sortingNumbers = [3, 1, 2, 5, 4];

// Using sort to sort numbers in ascending order
sortingNumbers.sort((a, b) => a - b);

console.log(sortingNumbers);

// Output: [1, 2, 3, 4, 5]
In this example, sort is used to sort the sortingNumbers array in ascending order.

##Array.reduce
const numbers = [100, 200, 300];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 600
The reduce method is used to reduce an array to a single value by applying a specified function to each element in the array. It takes two parameters, accumulator and currentValue. The accumulator is the total, and the initial value starts at 0. In this case, in the first iteration, accumulator will be 0, and currentValue will be 100, so accumulator + currentValue is 0 + 100, resulting in 100. In the second iteration, accumulator is 100, and currentValue is 200, so accumulator + currentValue is 100 + 200, resulting in 300. This process continues until it reaches 600, which is the sum of all the numbers in the array.



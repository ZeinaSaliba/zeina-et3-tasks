// What is array.reduce? What does it take and what does it return?

// The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array. It accepts a function executed on all the items of the specified array in the left-to-right sequence. The returned single value is stored in the accumulator.

// Explain how map() works to iterate over an array and return a new array.

// .map is a function that loop over an array and returns a new array with different objects

//exemple in .map 
const fweke = ['apple', 'banana', 'orange'];

const newArray = fweke.map((fruit) => {
  return `i like ${fruit}`;
});

console.log(newArray);

// Output:
// [ 'i like apple', 'i like banana', 'i like orange' ]

//We use the map method to iterate over each element in the fruits array and create a new array (newArray) based on the results of applying the provided callback function.

// Explain how filter() works to create a new array with filtered elements.

// The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

//exemple using filter 
const filteredNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using filter to keep only even filteredNumber
const evenfilteredNumber = filteredNumber.filter((number) => number % 2 === 0);

console.log(evenfilteredNumber);

// Output: [2, 4, 6, 8, 10]

//it return all the even number of my array by when I use filter method to see if the number corresponding divided by 2 is ==== to 0 if the condition is true then my number is odd and it will appear in my consol.log if the condition return false then the number is odd

// What is forEach

//The forEach() array method loops through any array, executing a provided function once for each array element in ascending index order. This function is referred to as a callback function.

// exemple using forEach 
const fruits = ['apple', 'banana', 'orange'];

// Using forEach to log each fruit to the console
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Output:
// apple
// banana
// orange

// We use the forEach method to iterate over each element in the fruits array. The provided callback function (fruit) => { console.log(fruit); } is executed once for each element. It takes each fruit as its parameter.

// The difference between forEach and .map is that 
// forEach doesn't create a new array instead, it operates on the original array in place. forEach is typically used when you want to perform some action for each item in the array without changing the array itself. and it doesn't return a value 
//or .map returns a new array containing the results of applying the function to each element, map does not modify the original array; it creates a new one

// find method
//The find() method returns the value of the first element that passes a test. The find() method executes a function for each array element. The find() method returns undefined if no elements are found. The find() method does not execute the function for empty elements.

//exemple using find
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
// in this exemple i want to find the name bob by creating a new const targetName i added the person name that I want to find which is bob then the provided callback function (user) => user.name === targetName checks if the name property of each user object matches the targetName finally find returns the first element that satisfies the condition (name === 'Bob'), which is the user object with the name bob

// sort method 
// The sort() sorts the elements of an array. The sort() overwrites the original array. The sort() sorts the elements as strings in alphabetical and ascending order.(a to z)

//exemple
const sortingNumber = [3, 1, 2, 5, 4];

// Using sort to sort sortingNumber in ascending order
sortingNumber.sort((a, b) => a - b);

console.log(sortingNumber);

// Output: [1, 2, 3, 4, 5]

const numbers = [100, 200, 300];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Output: 600

//So why the output is 600 because reduce is a method used to reduce an array to a single value by applying a specified function to each element in the array, here reduce take two parameter accumulator and currentValue, accumulator is the total the initial value starts 0 in this case in the  first iteration accumulator will be 0 and currentValue will be 100 so accumulator + currentValue is 0 + 100, resulting in 100 second iteration accumulator is 100, and currentValue is 200, so accumulator + currentValue is 100 + 200, resulting in 300 to it get to 600 which the sum of 300+300(last iteration) = 600
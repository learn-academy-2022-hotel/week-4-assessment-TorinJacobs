// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// const { exportAllDeclaration, assertTSExpressionWithTypeArguments } = require("@babel/types")
// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// PSEUDOCODE:
  // Declare a function called arrShuffle
  // INPUT: Array of string values
  // OUTPUT: Randomized array of string values minus the zeroeth indexed value of the original array
  // PROCESS: Write the test to establish a good fail and code the function to make the test pass by 

// TEST: RED
describe("arrShuffle", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  expect(arrShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
  expect(arrShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
})
})
// GOOD FAIL: 
//  FAIL  ./code-challenges.test.js
//   arrShuffle
//   ✕ takes in an array, removes the first item from the array and shuffles the remaining content

// ● arrShuffle › takes in an array, removes the first item from the array and shuffles the remaining content

//   ReferenceError: arrShuffle is not defined

//     27 |     const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//     28 |     // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
//   > 29 |   expect(arrShuffle(colors1)).toEqual(expect.arrayContaining(["blue", "green", "yellow", "pink"]))
//        |   ^
//     30 |   expect(arrShuffle(colors2)).toEqual(expect.arrayContaining(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]))
//     31 | })
//     32 | })

//     at Object.expect (code-challenges.test.js:29:3)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.168 s
// Ran all test suites.
// error Command failed with exit code 1.
// info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

// b) Create the function that makes the test pass.

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]

const arrShuffle = (array) => {
  array.shift()
  return array.sort(() => Math.random() - 0.5)
}
// TEST PASSED:
// At this point, I became tired and went with a simple researched solution on javascript.info/array-methods#shuffle-an-array to make my test pass. The Fisher-the Yates shuffle algorithm was more complicated than my brain could comprehend at the moment, so I went with the simpler solution and will go back to understand the Fisher-Yate shuffle with fresh eyes.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
// PSEUDOCODE: 
// INPUT: Object with up and down votes
// OUTPUT: Number

// TEST
describe("finalTally", () => {
  it("takes in an object that contains up votes and down votes and returns the end tally", () => {
    expect(finalTally(votes1)).toEqual(11)
    expect(finalTally(votes2)).toEqual(-31)
  })
})
const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

//  GOOD FAIL  ./code-challenges.test.js
//   finalTally
//   ✕ takes in an object that contains up votes and down votes  and returns the end tally (1 ms)

// ● finalTally › takes in an object that contains up votes and down votes and returns the end tally

//   ReferenceError: finalTalley is not defined

//     86 | describe("finalTally", () => {
//     87 |   it("takes in an object that contains up votes and down votes and returns the end tally", () => {
//   > 88 |     expect(finalTalley(votes1)).toEqual(11)
//        |     ^
//     89 |     expect(finalTalley(votes2)).toEqual(-31)
//     90 |   })
//     91 | })

//     at Object.expect (code-challenges.test.js:88:5)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s

// b) Create the function that makes the test pass.

// PROCESS: Declare a function called finalTally that takes in an object as a parameter 
// 
const finalTally = (obj) => {
  return obj.upVotes - obj.downVotes
}

//  PASS  ./code-challenges.test.js
//   finalTally
//     ✓ takes in an object that contains up votes and down votes and returns the end tally (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.166 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.84s.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.
// PSEUDOCODE:
// INPUT: ARRAYS
// OUTPUT: SINGLE ARRAY SANS DUPLICATES

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// TEST:
describe("noDupArr", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(noDupArr(dataArray1, dataArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
  })
})

// GOOD FAIL:
// noDupArr
// ✕ takes in two arrays as arguments and returns one array with no duplicate values

// ● noDupArr › takes in two arrays as arguments and returns one array with no duplicate values

//   ReferenceError: noDupArr is not defined

//     154 | describe("noDupArr", () => {
//     155 |   it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
//   > 156 |     expect(noDupArr(dataArray1, dataArray2)).toEqual(expect.arrayContaining(["array", "object", "number", "string", "Boolean", "null", "undefined"]))
//         |     ^
//     157 |   })
//     158 | })
//     159 | // b) Create the function that makes the test pass.

//     at Object.expect (code-challenges.test.js:156:5)

// b) Create the function that makes the test pass.

// PROCESS: Declare a function named noDupArr that combines two arrays
// Apply Set constructor and spread operator to iterate through the array and remove duplicates (https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/)


const noDupArr = (firstArr, secondArr) => {
  let bothArrays = firstArr.concat(secondArr)
  return [...new Set(bothArrays)]
}

// TEST PASSED  noDupArr
    // ✓ takes in two arrays as arguments and returns one array with no duplicate values
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.135 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.79s.
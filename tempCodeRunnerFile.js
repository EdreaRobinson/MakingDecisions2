var listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// Do not edit the code above.

// Use a for-loop to iterate through 'listOfNumbers', checking to see if each number is divisible by 3. If it is, console.log '{number} is 
// divisible by 3.'

//Code Here

For (i = 0; i < listOfNumbers.length; i++) {
  if (i % 3 === 0) {
    console.log(`listofNumbers[i] is divisible by 3.`)
  }
}
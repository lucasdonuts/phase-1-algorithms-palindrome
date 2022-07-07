function isPalindrome(word) {;
  const reverseWord = word.split('').reverse().join('');
  return word == reverseWord ? true : false;
}

/* 
  Add your pseudocode here
*/

/*
  In order to reverse the word for comparison, I had to split it into an array,
  reverse that array, then join the array elements back into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

var input = "4\nabc\nabcba\nabcd\ncba"
console.log(input)

var splitInput = input.split("\n")
console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)
console.log(numberOfTestCases)

var reduceLetterByOne = function reduceLetterByOne (letter) {
  var letter = letter.toLowerCase();
  console.log(letter)
  var valueOfLetter = letter.charCodeAt(0) - 97
  console.log("valueOfLetter: " + valueOfLetter)
  if (valueOfLetter > 0) {
    console.log("valueOfLetter: " + valueOfLetter)
    valueOfLetter -= 1;
    console.log("valueOfLetter: " + valueOfLetter)
    letter = String.fromCharCode(valueOfLetter + 97)
    console.log("String.fromCharCode(97): " + String.fromCharCode(97))
    console.log("letter: " + letter)
    console.log("valueOfLetter: " + valueOfLetter)
  }
  return letter;
}
reduceLetterByOne("k")

var processEachWord = function processEachWord (word) {
  console.log(word)
}
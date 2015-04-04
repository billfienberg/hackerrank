var input = "4\nabc\nabcba\nabcd\ncba"
console.log(input)

var splitInput = input.split("\n")
console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)
console.log(numberOfTestCases)

var reduceLetterByOne = function reduceLetterByOne (letter) {
  console.log("This is coming from the reduceLetterByOne function")
  var letter = letter.toLowerCase();
  // console.log(letter)
  var valueOfLetter = letter.charCodeAt(0) - 97
  // console.log("valueOfLetter: " + valueOfLetter)
  if (valueOfLetter > 0) {
    // console.log("valueOfLetter: " + valueOfLetter)
    valueOfLetter -= 1;
    // console.log("valueOfLetter: " + valueOfLetter)
    letter = String.fromCharCode(valueOfLetter + 97)
    // console.log("String.fromCharCode(97): " + String.fromCharCode(97))
    // console.log("letter: " + letter)
    // console.log("valueOfLetter: " + valueOfLetter)
  }
  return letter;
}
// reduceLetterByOne("k")


var processOneWord = function processOneWord (word) {
  var term = word.trim().split("")
  console.log(term)
  var pointer2 = word.length - 1
  for (var i = 0; i < term.length; i++) {
    var pointer1 = i;
    // console.log(term)
    if (pointer1 < pointer2) {
      console.log("pointer1: " + pointer1)
      console.log("pointer2: " + pointer2)
      console.log("term[pointer1]: " + term[pointer1] + "; term[pointer2]: " + term[pointer2])
      if (term[pointer1] == term[pointer2]) {
        console.log("term[pointer1] and term[pointer2] are equal.")
      } else if (term[pointer1] != term[pointer2]) {
        console.log("term[pointer1] and term[pointer2] are not equal.")
        console.log(term[pointer2])
        term[pointer2] = reduceLetterByOne(term[pointer2])
        console.log(term[pointer2])
        console.log(term)
        term = term.join("")
        processOneWord(term)
      }
      // var valueOfIndex = term[i].toLowerCase().charCodeAt(0) - 97;
      // console.log(valueOfIndex)
      // if (valueOfIndex > 0 && valueOfIndex < 26) {
      //   console.log("The valueOfIndex is greater than 0 and less than 26.")
      //   console.log(term[i])
      //   term[i] = reduceLetterByOne(term[i])
      //   console.log(term[i])
      //   stuff = term.join("")
      //   console.log(stuff)
      // }
    }
    pointer2 -= 1;
  }
  console.log("---------------------------------------------")
  console.log(term)
  return term
  console.log("term is below this.")
  console.log("term is above this.")
}
var stuff = "abc"
processOneWord(stuff)
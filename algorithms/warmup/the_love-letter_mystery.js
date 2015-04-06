var input = "4\nabc\nabcba\nabcd\ncba"
console.log(input)

var splitInput = input.split("\n")
console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)
console.log(numberOfTestCases)

// Tools
// String.fromCharCode()
// "abc".charCodeAt

var app = function app (array) {

  var analyze = function analyze (word) {

    var word = word.split("")

    var updateIndex = function updateIndex (array, index, value) {
      array[index] = value;
      return array[index]
    }

    var reduceLetter = function reduceLetter (letter) {
      var valueOfLetter = letter.charCodeAt(0);
      var newLetter = String.fromCharCode(valueOfLetter - 1)
      return newLetter
    }
    // reduceLetter("b")

    var compare = function compare (word, first, second) {
      if (word[first] == word[second]) {
        console.log("first equals second")
      } else if (word[first] > word[second]) {
        console.log("first is greater than second.")
        console.log(word)
        updateIndex(word, first, reduceLetter(first))
        console.log(word)
      } else if (word[second] > [first]) {
        console.log("second is greater than first.")
        console.log(word)
        updateIndex(word, second, reduceLetter(second))
        console.log(word)
      } else {
        console.log("Something weird happened.")
      }
    }
    // compare(2,1)
    // compare(1,2)
    // compare(1,1)

    var pointer = word.length - 1;
    for (var i = 0; i < word.length; i++) {
      if (i >= pointer) {
        break;
        console.log(console.log("i is greater or equal to pointer."))
      }

      compare(word[i], word[pointer])
      pointer -= 1;
    }
    console.log(word)
    word = word.join("")
    console.log(word)

  }
  analyze("abc")


  for (var z = 0; z < array.length; z++) {
    console.log(array[z])
  }
}
app(splitInput)
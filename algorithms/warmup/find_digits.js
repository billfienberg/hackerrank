var input = "2\n12\n1012"

var splitInput = input.split("\n")
console.log(splitInput)

for (var i = 0; i < splitInput.length; i++) {
    splitInput[i] = splitInput[i].split(" ")
    console.log(splitInput[i])
}

var number = "12"
var firstDigit = "1"
var secondDigit = "2"
if (number % firstDigit === 0) {
  console.log("Divides exactly")
} else {
  console.log(Does not divide exactly)
}


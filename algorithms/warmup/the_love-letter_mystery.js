var input = "4\nabc\nabcba\nabcd\ncba"

var splitInput = input.split("\n")
console.log(splitInput)

for (var i = 0; i < splitInput.length; i++) {
    splitInput[i] = splitInput[i].split(" ")
    console.log(splitInput[i])
}
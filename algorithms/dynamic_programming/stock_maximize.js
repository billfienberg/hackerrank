// var input = "3\n3\n5 3 2\n3\n1 2 100\n4\n1 3 1 2"
// console.log(input)

// var splitInput = input.split("\n")
// console.log(splitInput)

// var numberOfTestCases = splitInput.splice(0,1)[0]
// console.log(numberOfTestCases)
// console.log(splitInput)

var string = "5 3 2"
console.log(string)

var splitString = string.split(' ')
console.log(splitString)

for (var i = 0; i < splitString.length; i++) {
    console.log("--------------------------------------------------------------------------------")
    if (i == 0) {
        console.log("buy")
    } else if (i == splitString.length - 1) {
        // console.log("This is coming the last index")
    } else if (i > 0 && i < (splitString.length - 1)) {
        // console.log("splitString[" + i + "]: " + splitString[i] + "; splitString[" + (i + 1) + "]: " + splitString[i + 1])
        if (splitString[i] > splitString[i + 1]) {
            console.log("buy")
        } else {
            console.log("This is coming from the inner else statement.")
        }
    } else {
        console.log("This is coming from the else statement")
    }
}
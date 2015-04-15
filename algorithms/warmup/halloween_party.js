// var input = "4\n5\n6\n7\n8"
var input = "5\n322\n407\n899\n270\n683"
// console.log(input)

var output = "6\n9\n12\n16"
// console.log(output)

var splitInput = input.split("\n")
// console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)
// console.log(numberOfTestCases)
// console.log(splitInput)

var numberOfPieces, previousNumberOfCuts;
var calculateNumberOfPieces = function calculateNumberOfPieces (numberOfCuts) {
    if (numberOfCuts == 0) {
        numberOfPieces = 1
        // console.log(numberOfPieces)
        return numberOfPieces
    } else if (numberOfCuts == 1) {
        numberOfPieces = 2
        // console.log(numberOfPieces)
        return numberOfPieces
    } else if (numberOfCuts % 2 == 0) {
        // console.log("even")
        // console.log(Math.pow((numberOfCuts / 2) + 1, 2))
        previousNumberOfCuts = calculateNumberOfPieces(numberOfCuts - 1)
        numberOfPieces = Math.pow((numberOfCuts / 2) + 1, 2)
        // console.log(numberOfPieces)
        return numberOfPieces
    } else if (numberOfCuts % 2 != 0) {
        previousNumberOfCuts = calculateNumberOfPieces(numberOfCuts - 1)
        numberOfPieces = (calculateNumberOfPieces(numberOfCuts - 1) + Math.ceil(numberOfCuts / 2))
        // console.log(numberOfPieces)
        return numberOfPieces
    }
}

for (var i = 0; i < splitInput.length; i++) {
    console.log(splitInput[i])
    console.log(splitInput[i] - 2)
    // console.log(calculateNumberOfPieces((splitInput[i]-2)))
}
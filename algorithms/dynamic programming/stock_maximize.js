var input = "3\n3\n5 3 2\n3\n1 2 100\n4\n1 3 1 2"
console.log(input)

var splitInput = input.split("\n")
console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)[0]
console.log(numberOfTestCases)
console.log(splitInput)

var storage = {}

for (var i = 0; i < splitInput.length - 1; i++) {
    if (i % 2 == 0) {
        var string = "testCase" + (i / 2)
        console.log(string)
        storage[string] = {}
        storage[string].n = splitInput[i]
        storage[string].prices = splitInput[i + 1].split(" ")
    }
}
console.log(storage)


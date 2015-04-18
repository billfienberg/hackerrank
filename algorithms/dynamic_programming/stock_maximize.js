var input = "3\n3\n5 3 2\n3\n1 2 100\n4\n1 3 1 2"
// console.log(input)

var splitInput = input.split("\n")
// console.log(splitInput)

var numberOfTestCases = splitInput.splice(0,1)[0]
// console.log(numberOfTestCases)
// console.log(splitInput)

var storage = {}

for (var i = 0; i < splitInput.length - 1; i++) {
    if (i % 2 == 0) {
        var string = "testCase" + (i / 2)
        // console.log(string)
        storage[string] = {}
        storage[string].n = splitInput[i]
        storage[string].prices = splitInput[i + 1].split(" ")
    }
}
// console.log(storage)
// console.log(storage.testCase0.prices.length)
var transactions = []

var strategy = function strategy (array) {
    // console.log(array)
    var profit = 0, qty = 0, transactionNumber = "";
    for (var i = 0; i < array.length; i++) {
        transactionNumber = "transactionNumber" + i
        if (i == 0) {
            console.log("buy")
            qty += 1
            // console.log("i is 0.")
            transactions.push({id: i, type: "buy", price: array[i], qty: qty, profit: profit})

        } else if (i == array.length - 1) {
            // console.log("i is equal to the length of the array.")
            if (array[i] <= array[i - 1]) {
                console.log("buy")
                qty += 1
            } else if (array[i] >= array[i - 1]) {
                console.log("sell")
                qty -= 1
                profit += ()
            } else {
                console.log("this is coming from the else statement.")
            }
        } else if (i > 0 && i < array.length - 1) {
            if (array[i] <= array[i - 1]) {
                console.log("don't sell")
            } else if (array[i] >= array[i - 1]) {
                console.log("sell")
            } else {
                console.log("this is coming from the else statement.")
            }
            // console.log("i is not first or last.")
        } else {
            console.log("this is coming from the else statement.")
        }
    }
}
strategy(storage.testCase0.prices)
console.log(transactions)
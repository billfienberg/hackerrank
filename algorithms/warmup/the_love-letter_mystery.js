function processData(input) {
    //Enter your code here
    // var input = "4\nabc\nabcba\nabcd\ncba"
    // console.log(input)

    var splitInput = input.split("\n")
    // console.log(splitInput)

    var numberOfTestCases = splitInput.splice(0,1)
    // console.log(numberOfTestCases)

    // Tools
    // String.fromCharCode()
    // "abc".charCodeAt

    var app = function app (array) {

        var numberOfOperations = 0
        var analyze = function analyze (word) {

            var pointer = word.length - 1;

            var palindrome = function palindrome (word) {
                var pointer2 = word.length - 1
                for (var i = 0; i < word.length; i++) {
                    // console.log("---------------------------------------------")
                    // console.log("word[" + i + "]: " + word[i] + "; word[" + pointer2 + "]: " + word[pointer2])
                    if (i >= pointer2) {
                        // console.log("It's a palindrome")
                        console.log(numberOfOperations)
                        return true;
                    }
                    if (word[i] != word[pointer2]) {
                        // console.log("Not a palindrome")
                        return false;
                    }
                    pointer2 -= 1;
                }
            }

            // palindrome("abc")
            // palindrome("racecar")

            if (palindrome(word)) {
              return
            }

            var word = word.split("")

            var updateIndex = function updateIndex (array, index, value) {
                array[index] = value;
                return array[index]
            }

            // var myArray = [1,2,3]
            // updateIndex(myArray,0,5)

            var reduceLetter = function reduceLetter (letter) {
                var valueOfLetter = letter.charCodeAt(0);
                var newLetter = String.fromCharCode(valueOfLetter - 1)
                return newLetter
            }

            // reduceLetter("b")

            var compare = function compare (word, first, second) {
                if (word[first] == word[second]) {
                    // console.log("first: " + first + "; second: " + second)
                    // console.log("first equals second")
                    // console.log(second)
                } else if (word[first] > word[second]) {
                    // console.log("first is greater than second.")
                    // console.log(word)
                    // console.log("numberOfOperations: " + numberOfOperations)
                    numberOfOperations += 1
                    // console.log("numberOfOperations: " + numberOfOperations)
                    updateIndex(word, first, reduceLetter(word[first]))
                    // console.log(word)
                } else if (word[second] > [first]) {
                    // console.log("second is greater than first.")
                    // console.log(word)
                    // console.log("numberOfOperations: " + numberOfOperations)
                    numberOfOperations += 1
                    // console.log("numberOfOperations: " + numberOfOperations)
                    updateIndex(word, second, reduceLetter(word[second]))
                    // console.log(word)
                } else {
                    // console.log("Something weird happened.")
                }
            }

            // compare(2,1)
            // compare(1,2)
            // compare(1,1)

            for (var i = 0; i < word.length; i++) {
                // console.log("pointer: " + pointer)
                if (i >= pointer) {
                    break;
                    // console.log("i is greater or equal to pointer.")
                }

                compare(word, i, pointer)
                pointer -= 1;

            }

            // console.log(word)
            word = word.join("")
            // console.log(word)

            analyze(word)

        }
        // analyze("abc")

        for (var z = 0; z < array.length; z++) {
            // console.log(array[z])
            analyze(array[z])
            numberOfOperations = 0
        }
    }
    app(splitInput)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
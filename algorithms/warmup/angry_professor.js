
function processData(input) {
    //Enter your code here

    // The input variable below is in the same format provided by HackerRank
    // var input = "2\n4 3\n-1 -3 4 2\n4 2\n0 -1 2 1"

    // Create a variable named splitInput
    // Split the input variable on the '\n' character
    var splitInput = input.split("\n")

    // Log the result of the splutInput variable
    // console.log(splitInput)

    // Create a variable named numberOfTestCases
    var numberOfTestCases;

    // Create a function named countNumberOfPunctualStudents that takes an array as a parameter
    var countNumberOfPunctualStudents = function(array) {

        // Create a count variable and set it equal to 0
        var count = 0

        // Iterate through the array paramter
        for (var j = 0; j < array.length; j++) {
            if (array[j] <= 0) {
                // If the index of the array is non-positive, increment the count variable by 1
                count += 1
            }
        }

        // Log the value of the count variable
        // console.log("count: " + count)

        // Return the count variable
        return count
    }

    // Iterate through the splitInput array
    for (var i = 0; i < splitInput.length; i++) {

        // Log the current index of the splitInput array
        // console.log(splitInput[i])

        // Set the current index of the splitInput array eqaul to the result of splitting itself on the " " character
        splitInput[i] = splitInput[i].split(" ")

        // Log the current index of the splitInput array
        // console.log("splitInput[" + i + "]: " + splitInput[i])

        if (i === 0) {

            // If the first index of the splitInput array equals 1, set the numberOfTestCases variable equal to the value at the index
            numberOfTestCases = splitInput[i]

            // Log the result of the numberOfTestCases variable
            // console.log("numberOfTestCases: " + numberOfTestCases)

        } else if (i % 2 !== 0) {

            // If the current index of the splitInput array is odd
            // Create a variable named requisiteNumberOfPunctualStudents that is equal to the second index of the current index of the splitInput variable
            var requisiteNumberOfPunctualStudents = splitInput[i][1]

            // Log the value of the requisiteNumberOfPunctualStudents variable
            // console.log("requisiteNumberOfPunctualStudents: " + requisiteNumberOfPunctualStudents)

        } else if (i % 2 === 0) {

            // If the current index of the splitInput array is even
            // Create a count variable
            // Set it equal to the result of calling the countNumberOfPunctualStudents function with the current index of the splitInput array as an argument
            var count = countNumberOfPunctualStudents(splitInput[i])

            if (count >= requisiteNumberOfPunctualStudents) {
                // If the value of the count variable is greater than or equal to the value of the requisiteNumberOfPunctualStudents variable, then class is not cancelled
                // Log the word, "NO"
                console.log("NO")

            } else if (count < requisiteNumberOfPunctualStudents) {

                // If the value of the count variable is less than the value of the requisiteNumberOfPunctualStudents variable, then class is cancelled
                // Log the word, "YES"
                console.log("YES")

            }
        }
    }
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
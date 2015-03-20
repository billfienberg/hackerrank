function processData(input) {
    //Enter your code here

    // The input variable below is in the same format provided by HackerRank
    // var input = "9\n4 9 95 93 57 4 57 93 9"

    // Create a variable named splitInput
    // Split the input variable on the '\n' character
    var splitInput = input.split("\n")

    // Log the result of the splutInput variable
    // console.log(splitInput)

    // Create a variable named numberOfIntegers
    // Assign numberOfIntegers to be the first index of the splitInput variable
    // Remove the first index of the splitInput variable
    var numberOfIntegers = splitInput.splice(0,1)

    // Log the result of the numberOfIntegers variable
    // console.log(numberOfIntegers)

    // Log the result of the splitInput variable
    // console.log(splitInput)

    // Create a variable named integers
    // Split the first index of the integers variable on the ' ' character
    // Assign that result to the integers variable
    var integers = splitInput[0].split(" ")

    // Log the result of the integers variable
    // console.log(integers)

    // Create an object named summary to store the number of times an integer occurs
    var summary = {}

    // Iterate through the integers array
    for (var i = 0; i < integers.length; i++) {
        if (summary[integers[i]]) {
            // If the integer property already exists on the summary object, increment it by 1
            summary[integers[i]] += 1
        } else {
            // If the integer property does not exist on the summary object, set it equal to 1
            summary[integers[i]] = 1
        }
    }

    // Log the summary object
    console.log(summary)

    // Iterate through the summary object
    for (var property in summary) {
        if (summary[property] == 1) {
            // If a property of the summary object equals 1, log that property
            // console.log(property)
            process.stdout.write(property)
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

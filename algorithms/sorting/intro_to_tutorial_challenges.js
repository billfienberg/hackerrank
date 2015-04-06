function processData(input) {
    //Enter your code here
    // var input = "4\n6\n1 4 5 7 9 12"
    // var input = "23\n12\n1 3 5 7 9 11 13 15 17 19 21 23"
    // console.log(input)

    var splitInput = input.split("\n")
    // console.log(splitInput)

    var v = splitInput.splice(0,1)[0]
    // console.log(v)
    // console.log(splitInput)

    var n = splitInput.splice(0,1)[0]
    // console.log(n)
    // console.log(splitInput)

    splitInput = splitInput[0].split(" ")
    // console.log(splitInput)

    for (var i = 0; i < splitInput.length; i++) {
        if (splitInput[i] == v) {
            process.stdout.write(i);
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

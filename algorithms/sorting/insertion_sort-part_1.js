function processData(input) {
    //Enter your code here
    // var input = '5\n2 4 6 8 3';
    // var input = "14\n1 3 5 9 13 22 27 35 46 51 55 83 87 23";
    // var input = "10\n2 3 4 5 6 7 8 9 10 1";
    // console.log(input);

    // var output = '2 4 6 8 8 \n2 4 6 6 8 \n2 4 4 6 8 \n2 3 4 6 8';
    // var output = '1 3 5 9 13 22 27 35 46 51 55 83 87 87\n1 3 5 9 13 22 27 35 46 51 55 83 83 87\n1 3 5 9 13 22 27 35 46 51 55 55 83 87\n1 3 5 9 13 22 27 35 46 51 51 55 83 87\n1 3 5 9 13 22 27 35 46 46 51 55 83 87\n1 3 5 9 13 22 27 35 35 46 51 55 83 87\n1 3 5 9 13 22 27 27 35 46 51 55 83 87\n1 3 5 9 13 22 23 27 35 46 51 55 83 87';
    var output = '2 3 4 5 6 7 8 9 10 10\n2 3 4 5 6 7 8 9 9 10\n2 3 4 5 6 7 8 8 9 10\n2 3 4 5 6 7 7 8 9 10\n2 3 4 5 6 6 7 8 9 10\n2 3 4 5 5 6 7 8 9 10\n2 3 4 4 5 6 7 8 9 10\n2 3 3 4 5 6 7 8 9 10\n2 2 3 4 5 6 7 8 9 10\n1 2 3 4 5 6 7 8 9 10';
    // console.log(output);

    var splitInput = input.split("\n");
    // console.log(splitInput);

    var sizeOfArray = splitInput.splice(0,1)[0];
    // console.log(sizeOfArray);
    // console.log(splitInput);

    var arrayOfIntegers = splitInput[0].split(" ");
    // console.log(arrayOfIntegers);

    var v = arrayOfIntegers.pop();
    // console.log(v);
    // console.log(arrayOfIntegers);

    for (var i = arrayOfIntegers.length - 1; i >= 0; i--) {
        // console.log("-----------------------------------------------------------------------");
        // console.log(arrayOfIntegers);
        // console.log("i: " + i + "; arrayOfIntegers[" + i + "]: " + arrayOfIntegers[i] );
        if (i == arrayOfIntegers.length - 1 && arrayOfIntegers[i] > v) {
            arrayOfIntegers.push(arrayOfIntegers[i]);
        } else if (i == arrayOfIntegers.length - 1  && arrayOfIntegers[i] <= v) {
            // console.log(arrayOfIntegers[i] + "; " + v);
            arrayOfIntegers.push(v);
        } else if (i == 0 && arrayOfIntegers[i] <= v) {
            // console.log("i = 0, and the element is less than or equal to the value.");
            arrayOfIntegers.splice(i + 1, 1, v);
            console.log(arrayOfIntegers.join(' '));
            break;
        } else if (i == 0 && arrayOfIntegers[i] > v) {
            // console.log("i = 0, and the element is greater than the value.");
            arrayOfIntegers.splice(i + 1, 1, arrayOfIntegers[i]);
            console.log(arrayOfIntegers.join(' '));
            arrayOfIntegers.splice(0, 1, v);
            console.log(arrayOfIntegers.join(' '));
            break;
        } else if (arrayOfIntegers[i] > v) {
            arrayOfIntegers.splice(i + 1, 1, arrayOfIntegers[i]);
        } else if (arrayOfIntegers[i] <= v) {
            // console.log(arrayOfIntegers);
            arrayOfIntegers.splice(i + 1, 1, v);
            // console.log(arrayOfIntegers);
            console.log(arrayOfIntegers.join(' '));
            break;
        } else {
            // console.log("THIS IS COMING FROM THE ELSE STATEMENT.");
        }
        // console.log(arrayOfIntegers);
        console.log(arrayOfIntegers.join(' '));
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

function processData(input) {
    //Enter your code here
    var splitInput = input.split('\n');

    var n = parseInt(splitInput.splice(0,1)[0],10);

    var outputString = splitInput.join('');

    var setCharAt = function setCharAt (str, index, chr) {
        if (index > str.length - 1) return str;
        return str.substr(0, index) + chr + str.substr(index + 1);
    }

    var arrayOfCavityIndices = [], iMinusN, iMinus1, iPlus1, iPlusN;
    for (var i = 0; i < outputString.length; i++) {
        if (i >= n && (i < outputString.length - n)) {
            if (i % n == 0 || (i + 1) % n == 0) {
                // These indexes are on a border
            } else {
                iMinusN = i - n;
                iMinus1 = i - 1;
                iPlus1 = i + 1;
                iPlusN = i + n;
                if (outputString[i] > outputString[iMinusN] && outputString[i] > outputString[iMinus1] && outputString[i] > outputString[iPlus1] && outputString[i] > outputString[iPlusN]) {
                    arrayOfCavityIndices.push(i);
                }
            }
        }
    }

    for (var k = 0; k < arrayOfCavityIndices.length; k++) {
        outputString = setCharAt(outputString, arrayOfCavityIndices[k], 'X');
    }

    //                      foo.match(new RegExp('.{1,'+n+'}', 'g'));
    outputString = outputString.match(new RegExp('.{1,'+n+'}', 'g'));

    outputString = outputString.join('\n');
    console.log(outputString);

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
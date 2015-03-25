function processData(input) {
    //Enter your code here
    var splitInput = input.split('\n');
    // console.log(splitInput);

    var buyChocolates = function buyChocolates (money, price, requirement) {
        var money = money,
            cost = price,
            extra = requirement,
            purchase = Math.floor(money/cost),
            result = Math.floor(purchase + (purchase-1)/(requirement-1));

        console.log(result);
    };

    for (var i = 0; i < splitInput.length; i++) {
        splitInput[i] = splitInput[i].split(' ');
        // console.log(splitInput[i]);
    };


    for (var i = 1; i < splitInput.length; i++) {
      // console.log('splitInput[' + i + ']: ' + splitInput[i]);
      buyChocolates(splitInput[i][0],splitInput[i][1],splitInput[i][2]);
      // console.log('----------------------------------------------------------------------------');
    };
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
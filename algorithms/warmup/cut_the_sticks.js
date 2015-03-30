function processData(input) {
    //Enter your code here
    // var input = '6\n5 4 4 2 2 8';
    // console.log(input);

    var splitInput = input.split('\n'),
    numberOfSticks = splitInput.splice(0,1);
    // console.log(splitInput);

    // console.log(numberOfSticks[0]);
    // console.log(splitInput);

    splitInput = splitInput[0].split(' ');
    // console.log(splitInput);


    // console.log(lowest);

    var app = function app (array) {
        var lowest, max;
        // console.log(array);

      var findLowestNumberInArray = function findLowestNumberInArray (array) {
          for (var i = 0; i < array.length; i++) {
              // console.log(array.length);
              // console.log("array[i]: " + array[i]);
              array[i] = parseInt(array[i],10);
              if (lowest == undefined) {
                  lowest = array[i];
                  // console.log("lowest: " + lowest);
              } else if (array[i] <= lowest) {
                  lowest = array[i];
                  // console.log("lowest: " + lowest);
              }
          }
      }

      var removeOrReduce = function removeOrReduce (array) {
          // console.log("array.length: " + array.length);
          console.log(array.length);
          // console.log("-----------------------------------------------------------------------");
          // console.log("array.length: " + array.length);
          // console.log("lowest: " + lowest);
          for (var j = 0; j < array.length; j++) {
              if (array[j] - lowest <= 0) {
                  // console.log(array);
                  array.splice(j,1);
                  j -= 1;
                  // console.log(array);
              } else if (array[j] - lowest > 0) {
                  array[j] = array[j] - lowest;
              }
          }
          // console.log(array.length);
      }

      findLowestNumberInArray(array);
      removeOrReduce(array);

      if (array.length) {
          app(array);
      }

    }

    app(splitInput);
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
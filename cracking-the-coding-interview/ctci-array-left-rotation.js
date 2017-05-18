process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n_temp = readLine().split(" ");
  var n = parseInt(n_temp[0]); // length
  var k = parseInt(n_temp[1]); // numberOfRotations
  a = readLine().split(" "); // input
  a = a.map(Number);

  function performLeftRotations(array, arrayLength, numberOfRotations) {
    const actualNumberOfRotations = numberOfRotations % arrayLength;
    const lastElementsOfInput = array.slice(actualNumberOfRotations);
    const firstElementsOfInput = array.slice(0, actualNumberOfRotations);
    const output = [...lastElementsOfInput, ...firstElementsOfInput].join(" ");
    console.log(output);
  }

  performLeftRotations(a, n, k);
}

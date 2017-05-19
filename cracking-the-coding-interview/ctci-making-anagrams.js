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
  var a = readLine();
  var b = readLine();

  const array1 = a.split("");
  const array2 = b.split("");

  const state = {
    a: { array1: 0, array2: 0 },
    b: { array1: 0, array2: 0 },
    c: { array1: 0, array2: 0 },
    d: { array1: 0, array2: 0 },
    e: { array1: 0, array2: 0 },
    f: { array1: 0, array2: 0 },
    g: { array1: 0, array2: 0 },
    h: { array1: 0, array2: 0 },
    i: { array1: 0, array2: 0 },
    j: { array1: 0, array2: 0 },
    k: { array1: 0, array2: 0 },
    l: { array1: 0, array2: 0 },
    m: { array1: 0, array2: 0 },
    n: { array1: 0, array2: 0 },
    o: { array1: 0, array2: 0 },
    p: { array1: 0, array2: 0 },
    q: { array1: 0, array2: 0 },
    r: { array1: 0, array2: 0 },
    s: { array1: 0, array2: 0 },
    t: { array1: 0, array2: 0 },
    u: { array1: 0, array2: 0 },
    v: { array1: 0, array2: 0 },
    w: { array1: 0, array2: 0 },
    x: { array1: 0, array2: 0 },
    y: { array1: 0, array2: 0 },
    z: { array1: 0, array2: 0 }
  };

  array1.forEach(x => {
    state[x].array1 += 1;
  });

  array2.forEach(x => {
    state[x].array2 += 1;
  });

  const differences = [];
  Object.keys(state).map(x => {
    differences.push(Math.abs(state[x].array1 - state[x].array2));
  });

  const output = differences.reduce((prev, curr) => prev + curr);
  console.log(output);
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function maxXor(l, r) {
    var possibilities = []
    for (var i = l; i <= r; i ++) {
      for (var j = l; j <= r; j++) {
            possibilities.push([i,j])
        }
    }

    var results = []

    for (var i = 0; i < possibilities.length; i++) {
        // console.log(possibilities[i])
        results.push(possibilities[i][0] ^ possibilities[i][1])
    }

    // console.log(results)

    var max;

    for (var i = 0; i < results.length; i++) {
        if (!max) {
            max = results[i]
        } else if (results[i] > max) {
            max = results[i]
        }
    }

    // console.log(max)
    return max

}

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;

    res = maxXor(_l, _r);
    process.stdout.write(""+res);

});
function processData(input) {
    //Enter your code here
    // The input variable below is in the same format provided by HackerRank
    // var input = "100 100\n1 3 2 1 2 3 1 3 1 3 2 2 1 2 3 1 1 2 1 2 2 3 1 2 3 1 1 1 3 2 2 3 2 3 2 1 1 3 1 1 1 2 3 1 3 3 2 2 1 3 3 1 3 1 2 2 3 2 1 2 2 2 2 3 3 3 1 3 3 1 1 1 1 3 1 3 1 3 2 1 3 3 1 2 3 1 1 3 3 1 2 1 1 1 1 1 1 1 1 1\n44 92\n72 93\n13 85\n32 92\n25 45\n32 34\n91 97\n83 84\n53 56\n88 97\n25 28\n39 65\n48 94\n8 36\n23 96\n94 97\n21 70\n96 99\n61 94\n40 61\n74 87\n21 85\n33 70\n50 62\n77 82\n4 79\n63 98\n65 96\n63 83\n96 99\n91 96\n54 85\n56 77\n44 50\n74 78\n1 34\n57 69\n17 64\n23 35\n73 94\n3 52\n3 84\n18 43\n78 94\n43 75\n68 88\n63 94\n46 82\n68 81\n37 96\n74 77\n91 96\n59 66\n17 78\n73 97\n83 97\n65 67\n41 43\n54 82\n65 99\n91 99\n31 37\n51 55\n76 97\n66 80\n61 77\n52 93\n70 83\n60 90\n91 93\n77 96\n8 10\n59 71\n25 65\n63 89\n9 38\n21 72\n10 83\n14 24\n88 91\n97 98\n20 46\n2 19\n59 96\n75 89\n92 97\n24 70\n93 94\n47 90\n93 98\n9 86\n65 74\n42 80\n0 58\n59 84\n37 56\n39 89\n7 98\n44 65\n2 81"

    // Create a variable named splitInput
    // Split the input variable on the '\n' character
    var splitInput = input.split("\n");

    // Log the result of the splitInput variable
    // console.log(splitInput);

    // Iterate through the splitInput array
    for (var i = 0; i < splitInput.length; i++) {

        // Set the current index of the splitInput array eqaul to the result of splitting itself on the " " character
        splitInput[i] = splitInput[i].split(" ");

        // Log the current index of the splitInput array
        // console.log(splitInput[i]);
    }

    // Create a function named checkMaxWidth that accepts an array, an entry index and an exit index as a paramter
    var checkMaxWidth = function(array, entryIndex, exitIndex) {

        // Create a variable named lowestWidth, and upon creation set it equal to the value of the entry index in the array
        var lowestWidth = array[entryIndex];

        // Log the value of the lowestWidth variable
        // console.log("lowestWidth: " + lowestWidth);

        // Iterate through the array paramter starting from the entry index and ending after the exit index
        for (var j = entryIndex; j <= exitIndex; j++) {
            if (array[j] < lowestWidth) {
                // If the current value of the index of the array parameter is less than the current value of the lowestWidth variable, then set the lowestWidth variable equal to the current value of the index of the array parameter
                lowestWidth = array[j];
            }
        }

        // Return the lowestWidth variable
        return lowestWidth;
    }

    // Iterate through each test case
    for (var k = 2; k < splitInput[1].length + 2; k++) {

        // Create a variable named entryIndex that is equal to the integer that is returned from parsing the first index of the current test case
        var entryIndex = parseInt(splitInput[k][0]),
            exitIndex = parseInt(splitInput[k][1]),
            width = checkMaxWidth(splitInput[1],entryIndex,exitIndex);

        // Create a variable named entryIndex that is equal to the integer that is returned from parsing the second index of the current test case

        // Call the checkMaxWidth function
        // Use the first index of the splitInput array as the array parameter for the checkMaxWidth function
        // Use the entryIndex variable as the entryIndex parameter for the checkMaxWidth function
        // Use the exitIndex variable as the exitIndex parameter for the checkMaxWidth function
        // Create a variabe named width, and set it equal to the result of calling the checkMaxWidth function

        if (width == 1) {
            // If the value of the width variable is 1, then log the number 1
            console.log(1);
        } else if (width == 2) {
            // If the value of the width variable is 2, then log the number 2
            console.log(2);
        } else if (width == 3) {
            // If the value of the width variable is 3, then log the number 3
            console.log(3);
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
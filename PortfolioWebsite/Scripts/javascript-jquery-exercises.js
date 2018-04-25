'use strict'

const alphaPattern = new RegExp(/[a-zA-Z]/);
const numPattern = new RegExp(/[0-9]/)

//Five number calculator 

$('#fiveNumButton').click(function () {
    $('#pickFiveError').html('');
   
    let stringArray = $('#fiveInput').val().split(' ');

    let numArray = stringArray.map(function(x) {
        return parseInt(x, 10);
    });

    let cleanArray = numArray.filter(function (val) {
        return val || val === 0;
    });

    if (alphaPattern.test($('#fiveInput').val())) {
        $('#pickFiveError').html("<h6>" + "Looks like you put in something other than numbers." + "</h6>");
    } 
    else if (cleanArray.length < 5) {
         $('#pickFiveError').html("<h6>" + "I don't think you entered at least 5 numbers." + "</h6>");
    } else {
         let sum = 0;
         let product = 1;

         cleanArray.forEach(function (val) {
            sum += val;
            product *= val;
            });

         $('#pickFiveResults').html(
            "<h5>Smallest Number:</h5>" + "<p>" + Math.min(...cleanArray) + "</p>" + "<br>" +
            "<h5>Largest Number: </h5 >" + "<p>" + Math.max(...cleanArray) + "</p>" + "<br>" +
            "<h5>Mean: </h5>" + "<p>" + (sum / cleanArray.length).toFixed(2) + "</p>" + "<br>" +
            "<p><h5>Sum: </h5>" + "<p>" + sum + "</p>" + "<br>" +
            "<p><h5>Product: </h5>" + "<p>" + product + "</p>"
         );
    }
});

$("#fiveNumShowCode").click(function(){
    $("#fiveNumCode").toggle();
});

//Factorial

$('#factorialButton').click(function () {
    $('#factorialError').html('');
    let stringArray = $('#factorialInput').val().split(' ');
    let numArray = stringArray.map(function (x) {
        return parseInt(x, 10);
    });
    let cleanArray = numArray.filter(function (val) {
        return val || val === 0;
    });

    if ((cleanArray[0]) === 0) {
        $('#factorialResults').html(
            "<h5>The factorial of " + cleanArray[0] + " :</h5>" + "<p>0</p>"
        );
    }
    else if (alphaPattern.test($('#factorialInput').val())) {
        $('#factorialError').html("<h6>" + "Looks like you put in something other than numbers." + "</h6>");
    } 
    else if (cleanArray.length > 1 || cleanArray.length < 1 || cleanArray[0] < 0) {
         $('#factorialError').html("<h6>" + "You didn't enter a single positive integer." + "</h6>");
    } else {

        function factorial(num) {
            let factorial = 1;
            while (num > 1) {
                factorial *= num;
                num--;
            }
            return factorial;
        }

        if ( factorial(cleanArray[0]) == "Infinity") {
            $('#factorialResults').html(
                "<h5>The factorial of " + cleanArray[0] +  "<h5>" + "<p> is to large for me to calculate.</p>"
            );
        } else {
            $('#factorialResults').html(
                "<h5>The factorial of " + cleanArray[0] + " : </h5>" + "<p>" + factorial((cleanArray[0])) + "</p>"
            );
        }
    }
});

$("#factorialShowCode").click(function () {
    $("#factorialCode").toggle();
});


//Fizz Buzz

$('#fizzBuzzButton').click(function () {
    $('#fizzBuzzError').html('');
    let stringArray = $('#fizzBuzzInput').val().split(' ');
    $("#fizzBuzzResults").val('');
    let numArray = stringArray.map(function (x) {
        return parseInt(x, 10);
    });

    let cleanArray = numArray.filter(function (val) {
        return val || val === 0;
    });

    if (alphaPattern.test($('#fizzBuzzInput').val())) {
        $('#fizzBuzzError').html("<h6>" + "Looks like you put in something other than numbers." + "</h6>");
    }
    else if (cleanArray.length != 2 || cleanArray[0] <= 1  || cleanArray[0] >= 100 || cleanArray[1] <= 1 || cleanArray[1] >= 100 ) {
        $('#fizzBuzzError').html("<h6>" + "You didn't input 2 positive integers bewtween 1 - 100." + "</h6>");
    }else {
        var result = "";
        for (let i = 1; i <= 100; i++) {
            if (i % cleanArray[0] == 0 && i % cleanArray[1] == 0) {
                result += '<p style="margin-bottom:0px">fizzbuzz</p>';
            } else if (i % cleanArray[0] == 0) {
                result += '<p style="margin-bottom:0px">fizz</p>';
            } else if (i % cleanArray[1] == 0) {
                result += '<p style="margin-bottom:0px">buzz</p>';
            } else {
                result += '<p style="margin-bottom:0px">' + i + '</p>';
            }
        }
        $("#fizzBuzzResults").html("<div style='overflow:scroll;height:100px; width: 241.33px'>" + result +"</div>");
    }
});

$("#fizzbuzzShowCode").click(function () {
    $("#fizzbuzzCode").toggle();
});

//Palindrome

$('#palindromeButton').click(function () {
    $("#palindromeError").html('');
    if (numPattern.test($('#palindromeInput').val())) {
        $('#palindromeError').html("<h6>" + "Enter only a word." + "</h6>");
    } else {
        let reverseWord = ($('#palindromeInput').val().split('').reverse().join('')).toLowerCase();
        if (reverseWord === $('#palindromeInput').val().toLowerCase()) {
            $('#palindromeResults').html("<h5>" + ($('#palindromeInput').val()) + ": is a palindrome.</h5>")
        } else {
            $('#palindromeResults').html("<h5>" + ($('#palindromeInput').val()) + ": isn't a palindrome.</h5>")
        }
    }
});

$("#palindromeShowCode").click(function () {
    $("#palindromeCode").toggle();
});

//permutation
$('#permutationButton').click(function () {
    let permutation = ""; 
    let word = $('#permutationInput').val();
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length + 1; j++) {
            permutation +=  word.substring(i, j) + ", " ;
        }
    }
    $('#permutationResults').html("The Permutations for " + word + ":" + "<h5>" + permutation + "</h5>");
});

$("#permutationShowCode").click(function () {
    $("#permutationCode").toggle();
});

// alphabetical order

$('#alphaButton').click(function () {
    let word = $('#alphaInput').val();
    let wordArray = word.split("");
    let sortedWord = wordArray.sort().join("");
    $('#alphaResults').html(word + " alphabetized is" + "<h5>" + sortedWord + "</h5>");
});

$("#alphaShowCode").click(function () {
    $("#alphaCode").toggle();
});

//capitalize first letter

$('#titleCaseButton').click(function () {
    let stringarray = $('#titleCaseInput').val().split(" ");
    for (let i = 0; i < stringarray.length; i++) {
        stringarray[i] = stringarray[i].charAt(0).toUpperCase() + stringarray[i].substr(1);
    }
    $('#titleCaseResults').html(stringarray.join(" "));
});

$("#titleCaseShowCode").click(function () {
    $("#titleCaseCode").toggle();
});

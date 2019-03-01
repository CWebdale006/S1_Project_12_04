"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 4

   Author: Connor J Webdale 
   Date: 3.1.19 
   
   Filename: vw_results.js
   
   Functions:
   
   The calcSum() function is a callback function used to
   calculte the total value from items within an array
   
   The calcPercent(value, sum) function calculates the percentage given
   a value and a sum
   
   The createBar(partyType, percent) function writes a different
   table data table based on the candidates party affilication.
   
      
*/

// Declares a variable named reportHTML containing HTMl text. 
var reportHTML = "<h1>" + raceTitle + "</h1>";

// Created a "for" loop that loops through the contents of the race array. 
for (let i = 0; i < race.length; i++) {
    // Created a variable named totalVotes that will store the total votes cast in each race. Set its inital value to 0. 
    var totalVotes = 0;

    // Calculates the total votes cast in the current race by applying the forEach() method to the ith index of the votes array using the calcSum() function as the callback function. 
    votes[i].forEach(calcSum);

    // Adds the following HTMl text to the value of the reportHTML variable to write the name of the current race in the program loop. 
    reportHTML += "<table><caption>" + race[i] + "</caption><tr><th>Candidate</th><th>Votes</th></tr>"

    // Call the candidateRows() function using the counter variable "i" and the totalVotes variable as parameter values. Adds the value returned by this function to the value of the reportHTML variable. 
    reportHTML += candidateRows(i, totalVotes);

    // Adds HTML to the value of the reportHTML variable. 
    reportHTML += "</table>";
}

// After the "for" loop has completed, write the value of the reportHTML variable into the innerHTML of the section element. 
document.getElementById("results").innerHTML = reportHTML;

// Created the "candidateRows" function. This function has two parameters named raceNum and totalVotes. 
function candidateRows(raceNum, totalVotes) {
    // Declares a local variable named rowHTMl with an ititial value of an empty text string. 
    var rowHTML = "";

    // Creates a for loop in which the counter variable j goes from 0 to 2 in steps of 1 unit. 
    for (let j = 0; j <= 2; j++) {
        // Declares a variable named candidateName that retrieves the name of the current candidate in the current race. 
        var candidateName = candidate[raceNum][j];

        // Declares a variable named candidateParty that retrieves the party affilitation of the currne tcandidate in the current race form the multidimensional party array. 
        var candidateParty = party[raceNum][j];

        // Declares a variable named candidateVotes that retrieves the votes cast for the current candidate in the current race from the multidimensional votes arry. 
        var candidateVotes = votes[raceNum][j];

        // Declares a variable named candidatePercent equal to the value returned by the calcPercent() function when candidateVotes and totalVotes are parameters. 
        var candidatePercent = calcPercent(candidateVotes, totalVotes);

        // Created a for loop with a counter variable k that goes from 0 up to a value less than vandidatePercent in increments of 1 unit. 
        for (let k = 0; k < candidatePercent; k++) {
            // Each time through the loop call the createBar() function using candidateParty and candidatePercent as the parameter values. 
            createBar(candidateParty, candidatePercent);
        }

        // Adds HTML code ot the rowHTMl variable. Applies the "toFixed(1)" method to percent. 
        rowHTML += "<tr><td>" + candidateName + " (" + candidateParty + ")</td><td>" + candidateVotes.toLocaleString() + " (" + candidatePercent.toFixed(1) + "%)</td></tr>";
    }
    // Returns the value of the rowHTMl variable. 
    return rowHTML;
}

/* Callback Function to calculate an array sum */
function calcSum(value) {
    totalVotes += value;
}

/* Function to calculate a percentage */
function calcPercent(value, sum) {
    return (100 * value / sum);
}

// Creates a function named createBar() with one parameter named partyType. 
function createBar(partyType) {
    // Declares a variable named barHTML and sets its initial value to an empty text string. 
    var barHTML = "";

    // Creates a switch/case statement that tests the partyType parameter. 
    switch (partyType) {
        case "D":
            barHTML = "<td class='dem'></td>"
            break;
        case "R":
            barHTML = "<td class='rep'></td>"
            break;
        case "I":
            barHTML = "<td class='ind'></td>"
            break;
    }

    // Returns the value of barHTML 
    return barHTML;
}
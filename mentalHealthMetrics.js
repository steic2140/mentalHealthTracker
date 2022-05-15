
function mentalHealthMetrics() {

  // Declaring and initializing variables

  let baseGAD7;
  let baseMMPI;
  let basePHQ9;
  let followupVisitGAD7;
  let followupVisitPHQ9;
  let followupVisitMMPI;
  let clientName;
  let differenceMMPI;
  let differenceGAD7;
  let differencePHQ9;
  let output;
  let outputScoreSummary;

  // Gathering input from user
  clientName = prompt("What is the name or ID of the client?");
  basePHQ9 = prompt("Enter the score from the initial PHQ9.");
  baseGAD7 = prompt("Enter the score from the initial GAD7.");
  baseMMPI = prompt("Enter the score from the initial MMPI.");

  followupVisitPHQ9 = prompt("Enter the score from the PHQ9 at follow up.");
  followupVisitGAD7 = prompt("Enter the score from the GAD7 at follow up.");
  followupVisitMMPI = prompt("Enter the score from the MMPI at follow up.");

  // Converting the six inputs provided by the user to numbers
  baseGAD7 = Number(baseGAD7);
  baseMMPI = Number(baseMMPI);
  basePHQ9 = Number(basePHQ9);
  followupVisitGAD7 = Number(followupVisitGAD7);
  followupVisitPHQ9 = Number(followupVisitPHQ9);
  followupVisitMMPI = Number(followupVisitMMPI);

  // Calculating the difference between the base or initial value
  // and the subsequent values (PHQ9, GAD7, MMPI)
  differencePHQ9 = (basePHQ9 - followupVisitPHQ9);
  differenceGAD7 = (baseGAD7 - followupVisitGAD7);
  differenceMMPI = (baseMMPI - followupVisitMMPI);

  /* Beginning of the nested IF's, starting with checking if the final value
     is a valid number, and providing feedback if the user has attempted to
     enter non-numeric data.
   */
  if (isNaN(differencePHQ9) || isNaN(differenceMMPI) || isNaN(differenceGAD7)) {
    output = "You have entered invalid input; please make sure you are only " +
      "entering numeric values";
  }

  // Score of 0 to 6 and consequent action A
  else if (differenceMMPI, differenceGAD7, differencePHQ9 = 0 ||
  differenceMMPI, differenceGAD7, differencePHQ9 < 6) {
    output = "After the last appointment " + clientName + "'s mental health " +
      "experienced a slight positive trajectory";

  //Score of 7 to 13 and consequent action B
  } else if (differenceMMPI, differenceGAD7, differencePHQ9 >= 7
  || differenceMMPI, differenceGAD7, differencePHQ9 <= 13) {
    output = "After the last appointment " + clientName + "'s mental health" +
      "experienced a significant positive trajectory; inquire about life changes." +
      "\n\nContinue working with " + clientName + "if possible.";

    // Score greater than or equal to 14 and Action B
  } else if (differenceMMPI,differenceGAD7,differencePHQ9 >= 14) {
    output = "Since the last appointment " + clientName + " experienced an extreme positive shift" +
      "\nIf this is a sudden shift, and not the result of a major life change" +
      ", consider screening for a manic episode";
  }

  /* A second output, summarizing the client's name or identifier, as well as
  the difference between their base and follow-up PHQ9, GAD7, and MMPI values
  */
  outputScoreSummary =
    "\n\nSince the last visit " + clientName + " experienced the following changes: " +
    "\n\nPHQ9 change: " + differencePHQ9 + "." + "\nGAD7 change: " + differenceGAD7 +
     "." + "\nMMPI change: " + differenceMMPI + ".";

  /* Outputting to the screen the value differences, as well as a brief message
   summarizing what kind of improvement the client has made based on the data
  */
  document.write(output + outputScoreSummary);
}

mentalHealthMetrics();

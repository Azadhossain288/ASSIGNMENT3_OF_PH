
Problem-03: BCS Final Score Calculator
⚠️ Function Name Must be: finalScore()

Description
BCS exam OMR sheets are processed digitally. The system can count the number of correct, incorrect, and skipped answers, but it cannot calculate the final score. Your task is to create a function that takes an object containing these counts and calculates the final score based on specific BCS exam rules.

Input 📥
An Object with the following properties:

right: Number of correct answers.

wrong: Number of incorrect answers.

skip: Number of questions left unanswered.

Output
The final score as a rounded integer.

If the input is invalid, return the string "Invalid".

BCS Exam Rules 🎯
Total Questions: The sum of right + wrong + skip must be exactly 100.

Scoring Logic:

For every correct answer: +1.0 point.

For every incorrect answer: -0.5 point (negative marking).

For every skipped question: 0 points.

Challenge 🚩
If the sum of right + wrong + skip is not equal to 100, the function must return the string "Invalid".

Hints 💡
The final score might result in a decimal (e.g., 75.5). You should use the Math.round() function to return the nearest whole number.

















/*function signature/sample */
function finalScore (omr) {
          
     if(typeof omr !== 'object' || omr === null || Array.isArray(omr)){
           
          return 'Invalid';

     }

     const {right,wrong,skip}=omr;

     if(typeof right!== 'number' || typeof wrong!=='number' || typeof skip!== 'number'){
           return "Invalid";
     }

     let rightMarks=right*1;
     let wrongMarks=wrong*0.5;
     let skipMarks=skip*0;

     let totalMarks=Math.round(rightMarks-wrongMarks-skipMarks);

     let sumOfMarks=right+wrong+skip;

     if(sumOfMarks!==100){
          return "Invalid";
     }else{

           return totalMarks;
     }


}


console.log(finalScore({right:67,wrong:23,skip:10}));
console.log(finalScore({right:80,wrong:25,skip:0}));
console.log(finalScore({right:50,wrong:10,skip:40}));
console.log(finalScore({right:30,wrong:30,skip:40}));
console.log(finalScore("!@#"));
console.log(finalScore(["Raj"]));



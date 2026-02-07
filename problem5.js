
Problem-05: Text Analyzer for an AI Company
⚠️ Function Name Must be: analyzeText()

Description
Jihad works at an AI company. Often, users provide very large blocks of text as input. Processing such massive amounts of data takes the AI a lot of time. To optimize this, Jihad wants a function that analyzes and summarizes large texts by extracting key metrics.

You need to write a function that:

Takes a string as input.

Finds the longest word in that text.

Calculates the total number of characters in the text, excluding spaces.

Input 📥
A single input which must be a String (a full sentence or paragraph).

Output 🚀
An Object containing the following properties:

longwords: A string representing the longest word in the sentence. (If there are multiple words of the same maximum length, return the first one encountered).

token: A number representing the total character count of the sentence excluding spaces.

Challenge 📢
If the input is not a String (e.g., Number, Array, or Object), the function must return the string "Invalid".

Hints 💡
You can use the .split() method to break the sentence into individual words.

You can use the .join() or .replace() methods to handle space removal for the character count.










/*function signature/sample */
function  analyzeText(str) {
          
    //   console.log(str);

     if(typeof str!== 'string' || str.trim().length===0){

           return 'Invalid';

     }

     let cnt=str.split(" ").join("").length;

     let words=str.split(" ");
     let longestWord=words[0];

     for(let i=0;i<words.length;i++){
           if(words[i].length>longestWord.length){
               longestWord=words[i];
           }
     }

     return {

           longwords:longestWord,
           token:cnt
     }


}



console.log(analyzeText("I am a little honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345));


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


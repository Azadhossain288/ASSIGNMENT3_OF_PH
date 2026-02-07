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



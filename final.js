//... Question ans-1...//

/*function signature/sample */
function newPrice(currentPrice , discount ) {
          


      if(typeof currentPrice=== 'string' || typeof discount=== 'string' || discount<0  || discount>100){
            return "Invalid";
      }else{


       let dcp=parseFloat(discount/100);
       let discountPrice=currentPrice*dcp;

       let totalDiscountPrice=(currentPrice-discountPrice);

    

      return totalDiscountPrice.toFixed(3);


      }
      
      
 }




// let res=newPrice(300,101);

// console.log(res);



///....Question ans-2....///

/*function signature/sample */
function validOtp(otp) {
          
     
     if(typeof otp === "string" && (otp.length ===8 && (otp[0] ==='p' && otp[1] ==='h' && otp[2] ==='-'))){

            return true;
     }else if(typeof otp!=="string"){
              
           return "Invalid";
        
     }else{


           return false;
     }


}

let res=validOtp("ph-10985");
console.log(res);



///...Question no-3...///

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




///....Question no-4....///

/*function signature/sample */
function gonoVote(array) {
         
     
          if(!Array.isArray(array)){
               return "Invalid";
          }else{

             let cnt=0,ans=0;
              for(let i=0;i<array.length;i++){
                   if(array[i]=='ha'){
                       cnt++;
                   }else{

                        ans++;
                   }
              }

              if(cnt>ans){
                    return true;
              }else if(cnt===ans){
                   return 'equal';
              }else{

                    return false;
              }

          }

        //   console.log(array);

        // for(const arr of array){
        //        console.log(arr);
        // }





}

// let res=["ha", "ha", "ha", "na"];


console.log(gonoVote(["ha", "na", "ha", "na"]));
console.log(gonoVote(["ha", "na", "na"]));
console.log(gonoVote(["ha", "ha", "ha", "na"]));
console.log(gonoVote("ha, na"));
console.log(gonoVote(12345));




///.....Question no-5....///


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




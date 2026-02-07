
Problem-04: Upcoming Referendum (Gono Vote)
⚠️ Function Name Must be: gonoVote()

Description
You have been assigned to analyze the results of an upcoming referendum (Gono Vote). The voting data is stored in an Array, where each voter's opinion is recorded as either "ha" (Yes) or "na" (No). Your task is to create a function that counts the votes and determines if the "ha" votes have the majority.

Input 📥
A single input which is expected to be an Array of strings. Example: ["ha", "na", "ha"]

Output 🚀
Returns true if the number of "ha" votes is greater than the number of "na" votes.

Returns the string "equal" if the number of "ha" votes is exactly equal to the number of "na" votes.

Returns false in all other cases (i.e., if "na" votes are the majority).

Challenge 🚩
If the input is not an Array (e.g., if it is a String, Number, or Object), the function must return the string "Invalid".

















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



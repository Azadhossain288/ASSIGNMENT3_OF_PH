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



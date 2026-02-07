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

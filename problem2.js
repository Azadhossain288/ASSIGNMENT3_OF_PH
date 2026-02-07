
Problem-02: OTP Validation for Zapshift
⚠️ Function Name Must be: validOtp()

Description
Zapshift sends an OTP (One-Time Password) to customers during product delivery. However, some individuals are using fraudulent OTPs to claim packages. Your task is to create a function that validates whether an OTP is correct based on specific security rules.

The function should return a Boolean (true/false). If the input format is fundamentally incorrect, it should return the string "Invalid".

Input
A single input which is expected to be a string.

Output
Returns true if the OTP meets all rules.

Returns false if the OTP is a string but fails the rules.

Returns "Invalid" if the input is not a string.

Validation Rules 💡
Length: The OTP must be exactly 8 characters long.

Prefix: The OTP must start with the prefix "ph-".

Challenge 🚩
If the input is not a String (e.g., if it's a Number, Array, or Object), the function must return the string "Invalid".













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

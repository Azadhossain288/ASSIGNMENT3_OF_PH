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




let res=newPrice(300,101);

console.log(res);

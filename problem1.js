
Problem-01: New Price for Eid Sale
⚠️ Function Name Must be: newPrice()

Description
For the upcoming Eid, you want to offer discounts on your shop's products. However, calculating the new price for every single item manually is a hassle. To solve this, you want to create a function that takes the original price and the discount percentage, and then calculates the new price.

Input
Current Price: A number representing the original price (currentPrice).

Discount: A number representing the discount percentage (discount).

Output
The function should return the price after the discount is applied.

The output can be a decimal number.

The result must be formatted to 3 decimal places.

Constraints/Challenge 📢
If any of the inputs are not a number, return the string: "Invalid".

If the discount amount is less than 0 or greater than 100, return the string: "Invalid".





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

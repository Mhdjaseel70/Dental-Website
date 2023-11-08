let getCartBill = function()
{
let sum = 0;
for (let i = 0; i < arguments.length; i++)
{
sum = sum + arguments[i];
}
return sum;
}
console.log(getCartBill(13)); //13
console.log(getCartBill(54, 90, 120, 4)); // 268
console.log(getCartBill(55, 91, 1500, 30, 78, 23, 90));
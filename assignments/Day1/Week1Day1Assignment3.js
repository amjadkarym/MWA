const applyCoupon = function(obj){
return function(discount){
obj.price = obj.price - ((obj.price*discount)/100);
return obj;
}
}
console.log(applyCoupon(item)(10).price)

String.prototype.filterWords = function(arr){
myStr = this;
arr.map(val => myStr = myStr.replace(val,"***"));
return myStr;
}
module.exports.String = String;
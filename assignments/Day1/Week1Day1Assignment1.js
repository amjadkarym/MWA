String.prototype.filterWords = function(arr){
  var myStr = this.split(" ");
  arr.map(val => myStr = myStr.map(n=>n.replace(val, '***')));
  return myStr.join(" ");
}

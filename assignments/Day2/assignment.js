Array.prototype.even = function(){
    setTimeout(evenFunction, 0, this);
}
var evenFunction = function(xx) {
    console.log(xx.filter(val => val%2===0).map(va => va));
}
Array.prototype.odd = function(){
    setTimeout(oddFunction, 0, this);
}
var oddFunction = function(xx) {
    console.log(xx.filter(val => val%2!==0).map(va => va));
}

console.log('start');
[1,2,3,4,5,6,7,8].even();
[1,2,3,4,5,6,7,8].odd();
console.log('end')
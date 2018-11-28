String.prototype.filterWords = function(arr){
  var myStr = this.split(" ");
  arr.map(val => myStr = myStr.map(n=>n.replace(val, '***')));
  return myStr.join(" ");
}


//run 
// "Hello a World".filterWords(['Hello', 'World'])


String.prototype.filterWords = function(arr){
  return new Promise(function(resolve, reject) {
			// prpcess hgfjhg**kjhkhj***
			//resolve(prpcess)
			var myStr = this.split(" ");
			arr.map(val => myStr = myStr.map(n=>n.replace(val, '***')));
			if(true) {
				resolve(myStr.join(" "));
			} else {
				reject("error occured");
			}
		})
}


filterWords()
	.then(data => console.log(data))
	.catch(err => console.error(err));
	

// "Hello a World".filterWords(['Hello', 'World'])

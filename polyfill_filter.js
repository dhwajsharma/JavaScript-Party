// Current element, its index, and the context should be passed as an argument to the callback function.

let ages = [1, 2, 3, 4, 5, 6, 7];

Array.prototype.myFilter = function(callback, context){
	let finalArray = [];
	for(let i = 0; i < this.length; i++){
		if(callback.call(context, this[i], i, this)){
			finalArray.push(this[i])
		}
	}
	return finalArray;
}

let result = ages.myFilter(x => {
	return x < 5
})

console.log(result)

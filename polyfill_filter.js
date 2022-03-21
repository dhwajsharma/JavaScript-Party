// Current element, its index, and the context should be passed as an argument to the callback function.

Array.prototype.myFilter = function(callback){
	let temp = [];
	for(let i = 0; i < this.length; i++){
		if(callback(this[i], i, this)) temp.push(this[i]);
	}
	return temp;
}

const nums = [1,2,3,4];

const output = nums.myFilter(num =>  num > 2)

console.log(output)

// Current element, its index, and the context should be passed as an argument to the callback function.

Array.prototype.myMap = function(callback){
	let temp = [];
	for(let i = 0; i < this.length; i++){
		temp.push(callback(this[i], i, this));
	}
	return temp;
}

const nums = [1,2,3,4];

const output = nums.myMap((num, i, arr) => {
	return num*2;
})

console.log(output)

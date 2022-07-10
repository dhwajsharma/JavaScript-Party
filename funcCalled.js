let callCount = 0;

function sum(a,b){
	callCount++;
	
	return a + b;
}

sum(1,2)
console.log(callCount)

sum(1,2)
console.log(callCount)

sum(1,2)
console.log(callCount)

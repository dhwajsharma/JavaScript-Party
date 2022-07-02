/* 
Q) 5431 => 5 + 4 + 3 + 2 + 1 => 13
	=> 1 + 3 => 4
*/

function addData(data){
	let convertToString = "" + data;
	let convertToArray = convertToString.split("").map((data) => {
		return parseInt(data);
	})
	
	let finaloutput = convertToArray.reduce((a,b)=> a+b);

	if(finaloutput > 9){
		addData(finaloutput)
	} else {
		console.log(finaloutput)
	}

}



addData(5431);

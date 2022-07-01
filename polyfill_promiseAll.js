function promiseAll(promises){
	const result = [];
	let counter = 0;
	return new Promise((resolve, reject) => {
		promises.forEach((p, index) => {
			p.then((res) => {
				result.push(res);
				counter++;
				if(counter === result.length){
					return resolve(result);
				}
			})
			.catch(err => reject(err))
		})
	})
}

promiseAll([Promise.resolve("hello"), Promise.resolve("Dhwaj")])
.then(res => console.log("result", res))
.catch(err => console.err("err ", err))

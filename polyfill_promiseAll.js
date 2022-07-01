function myPromiseAll(taskList) {
  //to store results 
  const results = [];

  //to track how many promises have completed
  let promisesCompleted = 0;

  // return new promise
  return new Promise((resolve, reject) => {

    taskList.forEach((promise, index) => {
      //if promise passes
      promise.then((val) => {
          //store its outcome and increment the count 
          results[index] = val;
          promisesCompleted += 1;

          //if all the promises are completed, 
          //resolve and return the result
          if (promisesCompleted === taskList.length) {
            resolve(results)
          }
        })
        //if any promise fails, reject.
        .catch(error => {
          reject(error)
        })
    })
  });
}


function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error)

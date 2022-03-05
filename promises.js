const userLeft = false;
const watchingMeme = false;

function watchingTut() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "user left",
        message: ":(",
      });
    } else if (watchingMeme) {
      reject({
        name: "watching meme",
        message: ":)",
      });
    } else {
      resolve("subscribe");
    }
  });
}

watchingTut()
  .then((message) => {
    console.log(message); // subscribe
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

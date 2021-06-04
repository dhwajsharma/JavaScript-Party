document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("Grandparent Clicked");
  },
  true // capturing 
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("parent Clicked");
  },
  false // bubbling
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true // capturing
);

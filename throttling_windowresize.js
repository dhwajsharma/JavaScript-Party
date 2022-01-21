let w = document.querySelector("#width"),
  h = document.querySelector("#height"),
  c = document.querySelector("#calls"),
  throttled = false,
  delay = 250,
  calls = 0;

// window.resize callback function
function getDimensions() {
  w.innerHTML = window.innerWidth;
  h.innerHTML = window.innerHeight;
  calls += 1;
  c.innerHTML = calls;
}

// window.resize event listener
window.addEventListener("resize", function () {
  if (!throttled) {
    getDimensions();
    throttled = true;
    setTimeout(function () {
      throttled = false;
    }, delay);
  }
});

getDimensions();

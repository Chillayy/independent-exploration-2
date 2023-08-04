// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

// Update the time and the counterElement every second
const updateCounter = () => {
  time++;
  counterElement.textContent = time;
};

// Call the updateCounter function every 1000 milliseconds (1 second)
const intervalID = setInterval(updateCounter, 1000);

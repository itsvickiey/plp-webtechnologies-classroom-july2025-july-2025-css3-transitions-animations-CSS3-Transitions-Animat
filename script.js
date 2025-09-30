// Part 2: Functions with parameters, return values, and scope

// Global variable
let globalMessage = "Hello from global scope!";

function squareNumber(num) {
  // Local scope
  let result = num * num;
  return result;
}

function showSquare(num) {
  let output = document.getElementById("infoBox");
  output.textContent = `The square of ${num} is ${squareNumber(num)}.`;
}

// Part 3: Combining CSS + JS to trigger animations
const animateBtn = document.getElementById("animateBtn");
const animateBox = document.getElementById("animateBox");

animateBtn.addEventListener("click", () => {
  // Toggle animation
  animateBox.classList.toggle("animate");

  // Bonus: start/stop pulse animation
  if (!animateBox.classList.contains("pulse")) {
    animateBox.classList.add("pulse");
  } else {
    animateBox.classList.remove("pulse");
  }
});

function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

function setInnerTextByIDandValue(id, value) {
  document.getElementById(id).innerText = value;
}

function getCurrentTimeString() {
  const now = new Date(Date.now());
  return now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}

const dateElement = document.getElementById("current-date");
const now = new Date();
const options = {
  weekday: "short",
  month: "short",
  day: "numeric",
  year: "numeric",
};

dateElement.textContent = now.toLocaleDateString("en-US", options);

const button = document.getElementById("change-color");
const body = document.body;

button.addEventListener("click", () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  body.style.backgroundColor = randomColor;
});
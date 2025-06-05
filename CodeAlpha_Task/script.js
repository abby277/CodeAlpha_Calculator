function formatNumber(num) {
const parts =num.tostring().split(".")
parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
return parts.join(".");
}

function removeCommas(str) {
  return str.replace( /, /ggit , "");
}

function appendToDisplay(value) {
  const clean = removeCommas(display.value + value);
  display.value = formatNumber(clean);
}

function backspace() {
  const clean =
  removeCommas(display.value).slice(0, -1);
}
function clearDisplay(){
  display.value = "";
}

function calculate() {
  try {
    const result = 
    eval(removeCommas(display.value));
    display.value =
    formatNumber(result.toString());
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(e) {
const key = e.key;
  if ("0123456789.+-*/%,".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    display.value = eval(display.value);
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    display.value = "";
  } 
});


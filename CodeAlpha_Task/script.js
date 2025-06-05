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


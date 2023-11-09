const submitButton = document.getElementById("buttonid");
const myForm = document.getElementById("myForm");
const wallDiv = document.getElementById("wall");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const textInput = document.getElementById("textInput");
  const newColor = document.getElementById("color");

  const newDiv = document.createElement("div");
  newDiv.className = `bg-[${newColor.value}] h-72 w-72 rounded-lg justify-center flex items-center relative`;

  const paragraph = document.createElement("p");
  paragraph.textContent = textInput.value;
  paragraph.className = "text-center font-bold text-4xl";

  const closeButton = document.createElement("span");
  closeButton.innerHTML = "&times;";
  closeButton.className =
    "absolute top-2 right-2 text-black cursor-pointer bg-white p-2 rounded-lg h-10";
  closeButton.addEventListener("click", () => {
    wallDiv.removeChild(newDiv);
  });

  newDiv.appendChild(paragraph);
  newDiv.appendChild(closeButton);

  wallDiv.appendChild(newDiv);

  textInput.value = "";
  newColor.value = "#000000";

  if (newColor.value === "#000000") {
    paragraph.className = "text-white text-center font-bold text-4xl";
  } else {
    console.log("No paso nada");
  }
  const graffitiCheckbox = document.getElementById("graffitiCheckbox");
  const posterCheckbox = document.getElementById("posterCheckbox");

  graffitiCheckbox.addEventListener("change", () => {
    if (graffitiCheckbox.checked) {
      paragraph.style.fontFamily = "Gabarito, cursive";
      paragraph.style.fontStyle = "italic";
    } else {
      paragraph.style.fontFamily = "initial";
      paragraph.style.fontStyle = "initial";
    }
  });

  posterCheckbox.addEventListener("change", () => {
    if (posterCheckbox.checked) {
      paragraph.style.fontFamily = "initial";
      paragraph.style.fontStyle = "initial";
    } else {
      paragraph.style.fontFamily = "initial";
      paragraph.style.fontStyle = "initial";
    }
  });
});

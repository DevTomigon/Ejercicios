const submitButton = document.getElementById("buttonid");
const inputAltura = document.getElementById("texto");
const inputPeso = document.getElementById("texto2");

let colorSquareContainer = document.getElementById("textoColores");
let newDiv = null;
const colors = ["#808080", "#B2FFFF", "#FF0000"];
let colorIndex = 0;

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (!newDiv) {
    newDiv = document.createElement("div");
    newDiv.className = "h-72 w-72 rounded-lg text-center flex justify-center items-center mt-4";
    colorSquareContainer.appendChild(newDiv);

  
    const textElement = document.createElement("p");
    textElement.className = "text-white font-bold";
    newDiv.appendChild(textElement);
  }

 
  const textElement = newDiv.querySelector("p");


  const altura = parseFloat(inputAltura.value) / 100;
  const peso = parseFloat(inputPeso.value);
  const imc = calcularIMC(altura, peso);


  textElement.textContent = `Tu IMC es: ${imc.toFixed(2)}`;


  newDiv.style.backgroundColor = colors[colorIndex];
  textElement.style.color = (colors[colorIndex] === "#B2FFFF") ? "black" : "white";

 
  colorIndex = (colorIndex + 1) % colors.length;
});


function calcularIMC(altura, peso) {
  return peso / (altura * altura);
}
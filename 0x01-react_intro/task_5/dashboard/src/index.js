import "./index.css";

function component() {
  const element = document.createElement("div");
  element.innerHTML = "Hello, Webpack!";
  return element;
}

document.getElementById("app").appendChild(component());

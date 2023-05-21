const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "/VictorVHB/victorvhb.github.io/blob/main/firefox-icon.png") {
    myImage.setAttribute("src", "/VictorVHB/victorvhb.github.io/blob/main/Pittsburgh-flag.png");
  } else {
    myImage.setAttribute("src", "/VictorVHB/victorvhb.github.io/blob/main/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};

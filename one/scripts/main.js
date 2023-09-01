let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/beach.jpg") {
        myImage.setAttribute("src", "images/waves.jpg");
    } else {
        myImage.setAttribute("src", "images/beach.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `M'lady, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = `M'lady ${storedName} is fire!`;
}

myButton.onclick = () => {
    setUserName();
}


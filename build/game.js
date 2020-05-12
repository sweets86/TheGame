"use strict";
function Intro() {
    alert("Vill du spela Dejta?");
}
// Intro();
function myFunction(props, text, mainCon) {
    props = document.getElementById("headerContainer").innerText = "";
    (document.body.append(props));
    text = document.getElementById("headerText").innerText = "";
    (document.body.append(text));
    mainCon = document.createElement("div");
    mainCon.innerText = "Börja Spela!";
    mainCon.classList = "containerText";
    document.getElementById("mainContainer").append(mainCon);
}
/* const button = (document.getElementById("submitButton") as HTMLInputElement);
button.addEventListener("click", handleClick);

function handleClick() {
    console.log("Clicked!")
} */
/* let button = (document.getElementById("submitButton") as HTMLInputElement);
button.addEventListener("click", () => {
    (document.getElementById("headerContainer") as HTMLInputElement).innerText =""
}); */
/* class MyObject {
    genderMale: boolean;
    genderFemale: boolean;
    button: boolean;

    constructor(genderMale: boolean, genderFemale: boolean, button: boolean) {
        this.genderMale = genderMale;
        this.genderFemale = genderFemale;
        this.button = button;
    }
}

let genderMale = (document.getElementById("male") as HTMLInputElement).value;
let genderFemale = (document.getElementById("female") as HTMLInputElement).value;
let button = (document.getElementById("submitButton") as HTMLInputElement).value;

// let confirm = new MyObject(gender, button);

function myFunction(myObject: MyObject) {

}

myFunction.onclick = function () {

} */
//# sourceMappingURL=game.js.map
function Intro() {
    alert("Vill du spela Dejta?");
}

// Intro();

class MyObject {
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
    if (genderMale) {
        (document.getElementById("headerContainer") as HTMLInputElement).innerHTML = ""
    } else if (genderFemale) {
        (document.getElementById("headerContainer") as HTMLInputElement).innerHTML = ""
    }
}

myFunction.onclick = function () {
    
}
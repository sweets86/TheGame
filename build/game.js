"use strict";
function Intro() {
    alert("Vill du spela Dejta?");
}
// Intro();
var MyObject = /** @class */ (function () {
    function MyObject(genderMale, genderFemale, button) {
        this.genderMale = genderMale;
        this.genderFemale = genderFemale;
        this.button = button;
    }
    return MyObject;
}());
var genderMale = document.getElementById("male").value;
var genderFemale = document.getElementById("female").value;
var button = document.getElementById("submitButton").value;
// let confirm = new MyObject(gender, button);
function myFunction(myObject) {
    if (genderMale) {
        document.getElementById("headerContainer").innerHTML = "";
    }
    else if (genderFemale) {
        document.getElementById("headerContainer").innerHTML = "";
    }
}
myFunction.onclick = function () {
};
//# sourceMappingURL=game.js.map
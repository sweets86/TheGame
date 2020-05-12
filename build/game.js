"use strict";
function Intro() {
    alert("Vill du spela Dejta?");
}
// Intro();
function myFunction(props, text, mainConText, mainCon, list, img) {
    props = document.getElementById("headerContainer").innerText = "";
    (document.body.append(props));
    text = document.getElementById("headerText").innerText = "";
    (document.body.append(text));
    mainConText = document.createElement("h1");
    mainConText.innerText = "Börja Spela!";
    mainConText.classList = "containerStartText";
    document.getElementById("mainContainer").append(mainConText);
    mainCon = document.createElement("div");
    mainCon.innerText = "FRÅGA 1: Hur bjuder du ut din dejt?";
    mainCon.classList = "containerQuery";
    document.getElementById("mainContainer").append(mainCon);
    var text1 = {
        answer: "1 - Promenad"
    };
    var text2 = {
        answer: "2 - Bio"
    };
    var text3 = {
        answer: "3 - Middag"
    };
    var questions = [text1, text2, text3];
    var _loop_1 = function (i) {
        var allQuestion = questions[i];
        list = (document.createElement("li"));
        list.innerText = allQuestion.answer;
        list.onclick = function () {
            if (allQuestion.answer[0] == 1) {
                console.log("hej");
            }
            else if (allQuestion.answer[0] == 2) {
                alert("hallo");
            }
            else {
                document.getElementById("mainContainer").innerText = "";
            }
        };
        /* list.classList = "listStyle"; */
        document.getElementById("mainContainer").append(list);
    };
    for (var i = 0; i < questions.length; i++) {
        _loop_1(i);
    }
    img = (document.createElement("img"));
    img.classList = "img";
    img.src = "./build/Middag1.png";
    document.getElementById("mainContainer").append(img);
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
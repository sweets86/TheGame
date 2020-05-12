"use strict";
function Intro() {
    alert("Vill du spela Dejta?");
}
// Intro();
var text1 = {
    answer: "1 - Promenad",
};
var text2 = {
    answer: "2 - Bio",
};
var text3 = {
    answer: "3 - Middag",
};
var questions = [text1, text2, text3];
function myFunction(props, text, mainConText, mainCon, list, img, mainContainer) {
    props = document.getElementById("headerContainer").innerText = "";
    (document.body.append(props));
    text = document.getElementById("headerText").innerText = "";
    (document.body.append(text));
    mainConText = document.createElement("h1");
    mainConText.innerText = "Börja Spela!";
    mainConText.classList = "containerStartText";
    document.getElementById("mainContainer").append(mainConText);
    mainCon = document.createElement("div");
    mainCon.id = "mainID";
    mainCon.innerText = "FRÅGA 1: Hur bjuder du ut din dejt?";
    mainCon.classList = "containerQuery";
    document.getElementById("mainContainer").append(mainCon);
    mainContainer = document.createElement("div");
    mainContainer.id = "mainContainerID";
    document.getElementById("mainContainer").append(mainContainer);
    var _loop_1 = function (i) {
        var allQuestion = questions[i];
        list = (document.createElement("li"));
        list.innerText = allQuestion.answer;
        list.onclick = function () {
            if (allQuestion.answer[0] == 1) {
                document.getElementById("mainContainerID").innerText = "";
                nextQuery(nextQuery, nextQuery, nextQuery);
            }
            else if (allQuestion.answer[0] == 2) {
                alert("hallo");
            }
            else {
                document.getElementById("mainContainer").innerText = "";
            }
        };
        /* list.classList = "listStyle"; */
        document.getElementById("mainContainerID").append(list);
    };
    for (var i = 0; i < questions.length; i++) {
        _loop_1(i);
    }
    img = (document.createElement("img"));
    img.id = "picID";
    img.classList = "img";
    img.src = "./build/Middag1.png";
    document.getElementById("mainContainer").append(img);
}
var textOne = {
    answer1: "1 - Tar fram Paraply"
};
var textTwo = {
    answer1: "2 - Springer så fort du kan och tar skydd"
};
var textThree = {
    answer1: "3 - Vinkar på taxi"
};
var questionOne = [textOne, textTwo, textThree];
function nextQuery(nextQ, nextL, nextImg) {
    nextQ = document.getElementById("mainID");
    nextQ.innerText = "FRÅGA 2: Det kommer nederbörd, vad gör du?";
    for (var i = 0; i < questionOne.length; ++i) {
        var Question = questionOne[i];
        nextL = document.createElement("li");
        nextL.innerText = Question.answer1;
        document.getElementById("mainContainerID").append(nextL);
    }
    nextImg = document.getElementById("picID");
    nextImg.classList = "img";
    nextImg.src = "./build/Regn1.png";
    document.getElementById("mainContainer").append(nextImg);
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
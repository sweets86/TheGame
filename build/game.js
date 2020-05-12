"use strict";
function Intro() {
    alert("Vill du spela Dejta?");
}
;
//Intro();
var text1 = {
    answer: "1 - Promenad",
};
var text2 = {
    answer: "X - Bio",
};
var text3 = {
    answer: "2 - Middag",
};
var questions = [text1, text2, text3];
function myFunction(props, text, mainConText, mainCon, list, img, mainContainer) {
    props = document.getElementById("headerContainer").innerText = "";
    (document.body.append(props));
    text = document.getElementById("headerText").innerText = "";
    (document.body.append(text));
    mainConText = document.createElement("h1");
    mainConText.id = "mainConID";
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
        list.id = "listID";
        list.innerText = allQuestion.answer;
        list.onclick = function () {
            if (allQuestion.answer[0] == "1") {
                document.getElementById("mainConID").innerText = "Du spelar Dejta?";
                nextQuery(nextQuery, nextQuery, nextQuery);
            }
            else if (allQuestion.answer[0] == "X") {
                document.getElementById("mainConID").innerText = "Du spelar Dejta?";
                secondNextQ(secondNextQ, secondNextQ, secondNextQ);
            }
            else {
                document.getElementById("mainConID").innerText = "Du spelar Dejta?";
                dinnerQ(dinnerQ, dinnerQ, dinnerQ);
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
    answerOne: "1 - Tar fram Paraply",
};
var textTwo = {
    answerOne: "X - Springer så fort du kan och tar skydd",
};
var textThree = {
    answerOne: "2 - Vinkar på taxi",
};
var questionOne = [textOne, textTwo, textThree];
function nextQuery(nextQ, nextL, nextImg) {
    nextQ = document.getElementById("mainID");
    nextQ.innerText = "FRÅGA 2: Det kommer nederbörd, vad gör du?";
    var _loop_2 = function (i) {
        var Question = questionOne[i];
        nextL = document.getElementById("listID");
        nextL.innerText = Question.answerOne;
        nextL.onclick = function () {
            if (Question.answerOne[0] == "1") {
                alert("Ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?");
            }
            else if (Question.answerOne[0] == "X") {
                alert("Oj, oj, oj.. Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?");
            }
            else {
                alert("WoW! Ni skaffar barn ihop och lever loppan! Spela igen?");
            }
            location.reload();
        };
        document.getElementById("mainContainerID").append(nextL);
    };
    for (var i = 0; i < questionOne.length; ++i) {
        _loop_2(i);
    }
    nextImg = document.getElementById("picID");
    nextImg.classList = "img";
    nextImg.src = "./build/Regn1.png";
    document.getElementById("mainContainer").append(nextImg);
}
var tOne = {
    ansOne: "1 - Titanic"
};
var tTwo = {
    ansOne: "X - Saw XXX"
};
var tThree = {
    ansOne: "2 - Partnern väljer"
};
var questionTwo = [tOne, tTwo, tThree];
function secondNextQ(secondQ, secondImg, secondL) {
    secondQ = document.getElementById("mainID");
    secondQ.innerText = "FRÅGA 2: Vilken film ser ni?";
    for (var i = 0; i < questionTwo.length; ++i) {
        var secQ = questionTwo[i];
        secondL = document.getElementById("listID");
        secondL.innerText = secQ.ansOne;
        secondL.onclick = function () {
            movieQ(movieQ, movieQ, movieQ);
        };
        document.getElementById("mainContainerID").append(secondL);
    }
    secondImg = document.getElementById("picID");
    secondImg.classList = "img";
    secondImg.src = "./build/Saw1.png";
    document.getElementById("mainContainer").append(secondImg);
}
var mOne = {
    aOne: "1 - Närmare kontakt",
    bOne: "1 - Hemma",
    cOne: "1 - 2 st."
};
var mTwo = {
    aOne: "X - Det behövs mer popcorn",
    bOne: "X - Paris",
    cOne: "X - 5 st."
};
var mThree = {
    aOne: "2 - Brandlarmet går",
    bOne: "2 - Vid sjön",
    cOne: "2 - 1 st."
};
var questionThree = [mOne, mTwo, mThree];
function movieQ(thirdQ, thirdImg, thirdL) {
    thirdQ = document.getElementById("mainID");
    thirdQ.innerText = "FRÅGA 3: Vad händer under filmen?";
    var _loop_3 = function (i) {
        var threeQ = questionThree[i];
        thirdL = document.getElementById("listID");
        thirdL.innerText = threeQ.aOne;
        thirdL.onclick = function () {
            if (threeQ.aOne[0] == "1") {
                alert("YEAH! Ni skaffar barn ihop och lever loppan! Spela igen?");
            }
            else if (threeQ.aOne[0] == "X") {
                alert("Bra val, ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?");
            }
            else {
                alert("Ojdå! Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?");
            }
            location.reload();
        };
        document.getElementById("mainContainerID").append(thirdL);
    };
    for (var i = 0; i < questionThree.length; i++) {
        _loop_3(i);
    }
    thirdImg = document.getElementById("picID");
    thirdImg.classList = "img";
    thirdImg.src = "./build/Popcorn1.png";
    document.getElementById("mainContainer").append(thirdImg);
}
function dinnerQ(fourtQ, fourthImg, fourthL) {
    fourtQ = document.getElementById("mainID");
    fourtQ.innerText = "FRÅGA 2: Vart tar du din dejt på middag?";
    for (var i = 0; i < questionThree.length; i++) {
        var fourQ = questionThree[i];
        fourthL = document.getElementById("listID");
        fourthL.innerText = fourQ.bOne;
        fourthL.onclick = function () {
            kidzQ(kidzQ, kidzQ, kidzQ);
        };
        document.getElementById("mainContainerID").append(fourthL);
    }
    fourthImg = document.getElementById("picID");
    fourthImg.classList = "img";
    fourthImg.src = "./build/Paris1.png";
    document.getElementById("mainContainer").append(fourthImg);
}
function kidzQ(fifthQ, fifthImg, fifthL) {
    fifthQ = document.getElementById("mainID");
    fifthQ.innerText = "FRÅGA 3: Hur många barn vill du ha?";
    var _loop_4 = function (i) {
        var fiveQ = questionThree[i];
        fifthL = document.getElementById("listID");
        fifthL.innerText = fiveQ.cOne;
        fifthL.onclick = function () {
            if (fiveQ.cOne[0] == "1") {
                alert("Javisst, ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?");
            }
            else if (fiveQ.cOne[0] == "X") {
                alert("Ooops... Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?");
            }
            else {
                alert("Det här gick ju bra! Ni skaffar barn ihop och lever loppan! Spela igen?");
            }
            location.reload();
        };
        document.getElementById("mainContainerID").append(fifthL);
    };
    for (var i = 0; i < questionThree.length; i++) {
        _loop_4(i);
    }
    fifthImg = document.getElementById("picID");
    fifthImg.classList = "img";
    fifthImg.src = "./build/Baby1.png";
    document.getElementById("mainContainer").append(fifthImg);
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
function Intro() {
    alert("Vill du spela Dejta?");
}
// Intro();
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
            if (allQuestion.answer[0] == 1) {
                document.getElementById("mainConID").innerText = "";
                nextQuery(nextQuery, nextQuery, nextQuery);
            }
            else if (allQuestion.answer[0] == 2) {
                document.getElementById("mainConID").innerText = "";
                secondNextQ(secondNextQ, secondNextQ, secondNextQ);
            }
            else {
                document.getElementById("mainConID").innerText = "";
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
    ansOne: "1 - Titanic"
};
var textTwo = {
    answerOne: "2 - Springer så fort du kan och tar skydd",
    ansOne: "X - Saw XXX"
};
var textThree = {
    answerOne: "3 - Vinkar på taxi",
    ansOne: "2 - Partnern väljer"
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
            else if (Question.answerOne[0] == "2") {
                alert("Oj, oj, oj.. Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?");
            }
            else {
                alert("WoW! Ni skaffar barn ihop och lever loppan! Spela igen?");
            }
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
    ansOne: "2 - Saw XXX"
};
var tThree = {
    ansOne: "3 - Partnern väljer"
};
var questionTwo = [tOne, tTwo, tThree];
function secondNextQ(secondQ, secondImg, secondL) {
    secondQ = document.getElementById("mainID");
    secondQ.innerText = "FRÅGA 2: Vilken film ser ni?";
    for (var i = 0; i < questionTwo.length; ++i) {
        var secQ = questionTwo[i];
        secondL = document.getElementById("listID");
        secondL.innerText = secQ.ansOne;
        console.log(secQ.ansOne);
    }
    ;
    document.getElementById("mainContainerID").append(secondL);
    secondImg = document.getElementById("picID");
    secondImg.classList = "img";
    secondImg.src = "./build/Saw1.png";
    document.getElementById("mainContainer").append(secondImg);
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

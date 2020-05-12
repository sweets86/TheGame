function Intro() {
    alert("Vill du spela Dejta?");
};

//Intro();


let text1 = {
    answer: "1 - Promenad",
}
let text2 = {
    answer: "X - Bio",
}
let text3 = {
    answer: "2 - Middag",
}

let questions: any = [text1, text2, text3]


function myFunction(props: any, text: any, mainConText: any, mainCon: any, list: any, img: any, mainContainer: any) {

    props = (document.getElementById("headerContainer") as HTMLInputElement).innerText = "";
    (document.body.append(props))

    text = (document.getElementById("headerText") as HTMLInputElement).innerText = "";
    (document.body.append(text))

    mainConText = (document.createElement("h1") as HTMLInputElement)
    mainConText.id = "mainConID"
    mainConText.innerText = "Börja Spela!";
    mainConText.classList = "containerStartText";
    (document.getElementById("mainContainer") as HTMLInputElement).append(mainConText)

    mainCon = (document.createElement("div") as HTMLInputElement)
    mainCon.id = "mainID"
    mainCon.innerText = "FRÅGA 1: Hur bjuder du ut din dejt?";
    mainCon.classList = "containerQuery";
    (document.getElementById("mainContainer") as HTMLInputElement).append(mainCon);


    mainContainer = document.createElement("div");
    mainContainer.id = "mainContainerID";
    (document.getElementById("mainContainer") as HTMLInputElement).append(mainContainer);

    for (let i = 0; i < questions.length; i++) {

        let allQuestion: any = questions[i]

        list = (document.createElement("li"))
        list.id = "listID"
        list.innerText = allQuestion.answer;
        list.onclick = function () {
            if (allQuestion.answer[0] == "1") {
                (document.getElementById("mainConID") as HTMLInputElement).innerText = "Du spelar Dejta?";
                nextQuery(nextQuery, nextQuery, nextQuery)
            } else if (allQuestion.answer[0] == "X") {
                (document.getElementById("mainConID") as HTMLInputElement).innerText = "Du spelar Dejta?";
                secondNextQ(secondNextQ, secondNextQ, secondNextQ)
            } else {
                (document.getElementById("mainConID") as HTMLInputElement).innerText = "Du spelar Dejta?";
                dinnerQ(dinnerQ, dinnerQ, dinnerQ)
            }
        };
        /* list.classList = "listStyle"; */
        (document.getElementById("mainContainerID") as HTMLInputElement).append(list);

    }

    img = (document.createElement("img"))
    img.id = "picID"
    img.classList = "img"
    img.src = "./build/Middag1.png";
    (document.getElementById("mainContainer") as HTMLInputElement).append(img);

}

let textOne = {
    answerOne: "1 - Tar fram Paraply",
}
let textTwo = {
    answerOne: "X - Springer så fort du kan och tar skydd",
}
let textThree = {
    answerOne: "2 - Vinkar på taxi",
}
let questionOne = [textOne, textTwo, textThree]

function nextQuery(nextQ: any, nextL: any, nextImg: any) {
    nextQ = document.getElementById("mainID")
    nextQ.innerText = "FRÅGA 2: Det kommer nederbörd, vad gör du?"

    for (let i = 0; i < questionOne.length; ++i) {
        let Question = questionOne[i]

        nextL = document.getElementById("listID")
        nextL.innerText = Question.answerOne;
        nextL.onclick = function () {
            if (Question.answerOne[0] == "1") {
                alert("Ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?")
            } else if (Question.answerOne[0] == "X") {
                alert("Oj, oj, oj.. Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?")
            } else {
                alert("WoW! Ni skaffar barn ihop och lever loppan! Spela igen?")
            }
            location.reload()
        };
        (document.getElementById("mainContainerID") as HTMLInputElement).append(nextL);
    }


    nextImg = document.getElementById("picID")
    nextImg.classList = "img"
    nextImg.src = "./build/Regn1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(nextImg);
}


let tOne = {
    ansOne: "1 - Titanic"
}
let tTwo = {
    ansOne: "X - Saw XXX"
}
let tThree = {
    ansOne: "2 - Partnern väljer"
}

let questionTwo = [tOne, tTwo, tThree]

function secondNextQ(secondQ: any, secondImg: any, secondL: any) {
    secondQ = document.getElementById("mainID")
    secondQ.innerText = "FRÅGA 2: Vilken film ser ni?"

    for (let i = 0; i < questionTwo.length; ++i) {
        let secQ = questionTwo[i]

        secondL = document.getElementById("listID")
        secondL.innerText = secQ.ansOne;
        secondL.onclick = function () {
            movieQ(movieQ, movieQ, movieQ)
        };

        (document.getElementById("mainContainerID") as HTMLInputElement).append(secondL);
    }


    secondImg = document.getElementById("picID")
    secondImg.classList = "img"
    secondImg.src = "./build/Saw1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(secondImg);
}

let mOne = {
    aOne: "1 - Närmare kontakt",
    bOne: "1 - Hemma",
    cOne: "1 - 2 st."
}
let mTwo = {
    aOne: "X - Det behövs mer popcorn",
    bOne: "X - Paris",
    cOne: "X - 5 st."
}
let mThree = {
    aOne: "2 - Brandlarmet går",
    bOne: "2 - Vid sjön",
    cOne: "2 - 1 st."
}

let questionThree = [mOne, mTwo, mThree]

function movieQ(thirdQ: any, thirdImg: any, thirdL: any) {
    thirdQ = document.getElementById("mainID")
    thirdQ.innerText = "FRÅGA 3: Vad händer under filmen?"

    for (let i = 0; i < questionThree.length; i++) {
        let threeQ = questionThree[i]

        thirdL = document.getElementById("listID")
        thirdL.innerText = threeQ.aOne;
        thirdL.onclick = function () {
            if (threeQ.aOne[0] == "1") {
                alert("YEAH! Ni skaffar barn ihop och lever loppan! Spela igen?")
            } else if (threeQ.aOne[0] == "X") {
                alert("Bra val, ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?")
            } else {
                alert("Ojdå! Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?")
            }
            location.reload()
        };

        (document.getElementById("mainContainerID") as HTMLInputElement).append(thirdL);
    }

    thirdImg = document.getElementById("picID")
    thirdImg.classList = "img"
    thirdImg.src = "./build/Popcorn1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(thirdImg);
}



function dinnerQ(fourtQ: any, fourthImg: any, fourthL: any) {
    fourtQ = document.getElementById("mainID")
    fourtQ.innerText = "FRÅGA 2: Vart tar du din dejt på middag?"

    for (let i = 0; i < questionThree.length; i++) {
        let fourQ = questionThree[i]

        fourthL = document.getElementById("listID")
        fourthL.innerText = fourQ.bOne;
        fourthL.onclick = function () {
            kidzQ(kidzQ, kidzQ, kidzQ)
        };

        (document.getElementById("mainContainerID") as HTMLInputElement).append(fourthL);
    }

    fourthImg = document.getElementById("picID")
    fourthImg.classList = "img"
    fourthImg.src = "./build/Paris1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(fourthImg);
}

function kidzQ(fifthQ: any, fifthImg: any, fifthL: any) {
    fifthQ = document.getElementById("mainID")
    fifthQ.innerText = "FRÅGA 3: Hur många barn vill du ha?"

    for (let i = 0; i < questionThree.length; i++) {
        let fiveQ = questionThree[i]

        fifthL = document.getElementById("listID")
        fifthL.innerText = fiveQ.cOne;
        fifthL.onclick = function () {
            if (fiveQ.cOne[0] == "1") {
                alert("Javisst, ni lever lyckliga alla dar och gifter er ännu lyckligare. Spela igen?")
            } else if (fiveQ.cOne[0] == "X") {
                alert("Ooops... Ni är dömda att aldrig mer ses igen, det var roligt så länge det vara. Spela igen?")
            } else {
                alert("Det här gick ju bra! Ni skaffar barn ihop och lever loppan! Spela igen?")
            }
            location.reload()
        };

        (document.getElementById("mainContainerID") as HTMLInputElement).append(fifthL);
    }

    fifthImg = document.getElementById("picID")
    fifthImg.classList = "img"
    fifthImg.src = "./build/Baby1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(fifthImg);
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


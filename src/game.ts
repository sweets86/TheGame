function Intro() {
    alert("Vill du spela Dejta?");
}

// Intro();



let text1 = {
    answer: "1 - Promenad",
}
let text2 = {
    answer: "2 - Bio",
}
let text3 = {
    answer: "3 - Middag",
}

let questions: any = [text1, text2, text3]


function myFunction(props: any, text: any, mainConText: any, mainCon: any, list: any, img: any, mainContainer: any) {

    props = (document.getElementById("headerContainer") as HTMLInputElement).innerText = "";
    (document.body.append(props))

    text = (document.getElementById("headerText") as HTMLInputElement).innerText = "";
    (document.body.append(text))

    mainConText = (document.createElement("h1") as HTMLInputElement)
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
        list.innerText = allQuestion.answer;
        list.onclick = function () {
            if (allQuestion.answer[0] == 1) {
                (document.getElementById("mainContainerID") as HTMLInputElement).innerText = "";
                nextQuery(nextQuery, nextQuery, nextQuery)
            } else if (allQuestion.answer[0] == 2) {
                alert("hallo")
            } else {
                (document.getElementById("mainContainer") as HTMLInputElement).innerText = "";
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
    answer1: "1 - Tar fram Paraply"
}
let textTwo = {
    answer1: "2 - Springer så fort du kan och tar skydd"
}
let textThree = {
    answer1: "3 - Vinkar på taxi"
}
let questionOne = [textOne, textTwo, textThree]

function nextQuery(nextQ: any, nextL: any, nextImg: any) {
    nextQ = document.getElementById("mainID")
    nextQ.innerText = "FRÅGA 2: Det kommer nederbörd, vad gör du?"

    for (let i = 0; i < questionOne.length; ++i) {
        let Question = questionOne[i]

        nextL = document.createElement("li")
        nextL.innerText = Question.answer1;
        (document.getElementById("mainContainerID") as HTMLInputElement).append(nextL);
    }


    nextImg = document.getElementById("picID")
    nextImg.classList = "img"
    nextImg.src = "./build/Regn1.png";

    (document.getElementById("mainContainer") as HTMLInputElement).append(nextImg);
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


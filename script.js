let wordList =["אבטיח","חנוכה","ישראל","גבעתי","גולני","משפחה","מכללה","נסיכה","שולחן","צעצוע",
    "בקבוק","אלמוג","לביאה","מנעול","קישוא","תינוק","קריאה","מריצה","מכשפה","מחברת"];

const game = {
    numOfCell: 1,
    numOfRow: 1,
    secWord: randomWord(),
};

let NUMBER_OF_GUESS = 6;
let NUMBER_OF_CELL=5;


function randomWord (){
    let randomNum = Math.ceil(Math.random()*20)-1;
    return wordList[randomNum];
}

function setLetter(letter) {
    let cell=""
    if (game.numOfCell==NUMBER_OF_GUESS){
        return;
    }
    else {
        if (game.numOfCell == NUMBER_OF_CELL) {
            cell = terminalLetter(letter)
        }
        else {
            cell = letter;
        }
        let box = document.getElementById("letter" + game.numOfRow + game.numOfCell);
        box.innerText = cell;
        game.numOfCell++;
    }
}

function terminalLetter (letter){
    if (letter=="מ"){
        letter="ם"
    }
    if (letter=="נ"){
        letter="ן"
    }
    if (letter=="כ"){
        letter="ך"
    }
    if (letter=="צ"){
        letter="ץ"
    }
    if (letter=="פ"){
        letter="ף"
    }
    return letter;
}

function deleteLetter() {
    let cell = game.numOfCell-1;
    if (cell-1==-1){
        return;
    }
    else {
        let row = game.numOfRow;
        let letter = document.getElementById("letter" + row + cell).innerText;
        if (letter === "") {
            return;
        } else {
            let box = document.getElementById("letter" + row + cell);
            box.innerText = "";
            game.numOfCell--;
        }
    }
}

function checkGuss () {
    if (game.numOfCell != NUMBER_OF_GUESS) {
        return;
    } else {
        let row = game.numOfRow;
        let cell = 1;
        let word = "";
        let index = 0;
        while (index < NUMBER_OF_CELL) {
            word = word + document.getElementById("letter" + row + cell).innerText;
            cell++;
            index++;
        }
        if (checkIfWordInStock(word)) {
            paintCellAndKey(word);
            if (word == game.secWord) {
                messages("you win");
            } else{
                game.numOfRow++;
                game.numOfCell=1;
                if (game.numOfRow==NUMBER_OF_GUESS+1){
                    messages("you lose, the word is: "+game.secWord)
                }
            }
        } else messages("The word doesnt exist")
    }
}

function checkIfWordInStock (word){
    let ans = false;
    for (let i=0;i<wordList.length;i++){
        if (word==wordList[i]){
            ans = true;
            return ans;
        }
    }
}

function paintCellAndKey(word){
    let row=game.numOfRow;
    for (let i=1;i<6;i++) {
        let letter2 = game.secWord.charAt(i-1);
        for (let j = 1; j<6; j++) {
            let letter1 = word.charAt(j - 1)
            if ((letter1 == letter2) && (i == j)) {
                document.getElementById("letter" + row + i).style.background = "green";
                document.getElementById(letter1).style.background = "green";
            }
            if (document.getElementById("letter" + row + j).style.background != "green") {
                if ((letter1 == letter2) && (i != j)) {
                    document.getElementById("letter" + row + j).style.background = "yellow";
                    if (document.getElementById(letter1).style.background != "green"){
                        document.getElementById(letter1).style.background = "yellow";
                    }
                }
            }
            if ((document.getElementById("letter" + row + j).style.background != "green")&&(document.getElementById("letter" + row + j).style.background != "yellow"))
            {
                if ((letter1 != letter2)) {
                    document.getElementById("letter" + row + j).style.background = "gray";
                    if ((document.getElementById(letter1).style.background != "green")&&(document.getElementById(letter1).style.background != "yellow"))
                    document.getElementById(letter1).style.background = "gray";
                }
            }
        }
    }
}

function messages (message){
    let modal = document.getElementById("myModal");
    modal.innerText=message;
    let span = document.getElementsByClassName("close");
        modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}








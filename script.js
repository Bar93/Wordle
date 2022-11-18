let wordList =["אבטיח","חנוכה","ישראל","גבעתי","גולני","משפחה","מכללה","נסיכה","שולחן","צעצוע",
    "בקבוק","אלמוג","לביאה","מנעול","קישוא","תינוק","קריאה","מריצה","מכשפה","מחברת"];

const game = {
    numOfCell: 1,
    numOfRow: 1,
    secWord: randomWord(),
};


function randomWord (){
    let randomNum = Math.ceil(Math.random()*20);
    return wordList[randomNum];
}

function buildKeyBord (){

}

function checkUserInput (){

}

function setLetter(letter) {
    if (game.numOfCell==6){
        return;
    }
    else {
        let c = letter;
        let box = document.getElementById("letter"+game.numOfRow+game.numOfCell);
        box.innerText = c;
        game.numOfCell++;
    }
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
    if (game.numOfCell != 6) {
        return;
    } else {
        let row = game.numOfRow;
        let cell = 1;
        let word = "";
        let index = 0;
        while (index < 5) {
            word = word + document.getElementById("letter" + row + cell).innerText;
            cell++;
            index++;
        }
        if (checkIfWordInStock(word)) {

            if (word == game.secWord) {
                alert("good");
            } else alert("no")
        } else alert("no in stock")
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

function paintCell(){

}
function paintKeyBord(){

}





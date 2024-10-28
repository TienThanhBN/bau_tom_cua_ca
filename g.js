
const MAX_ROW = 10;
const MAX_COL = 10;
let board = document.getElementById("board");
let currentStr = [];
let wordFound = [];
let cellResetColor = [];
let charLibrary = 'lessonadab:taskaetile:etbipeocda:lnejpdkesr:egeulvipzo:vmnceisnap:iasentsqui:sthatolast:ihyoupfish:ongodergex'
let res = charLibrary.split("");
let correctWords = ['visit', 'skip', 'less', 'lesson', 'dab', 'bad', 'task', 'sen', 'sent', 'vip', 'sin', 'last', 'snap', 'you', 'fish', ' ten', 'net', 'apple', 'been', 'bear', 'tab', ' kiss', 'top', 'lab', 'ask', 'goder', 'that', 'sex', 'man', 'need', 'nato']

function readLibrary(arr) {
    let arrSplitLine = arr.split(':');
    let result = [];
    for (let str of arrSplitLine) {
        let arrSplitChar = str.split('');
        result.push(arrSplitChar);
    }
    return result;
}

function displayBoard() {
    let str = "";
    let library = readLibrary(charLibrary);
    console.log(library)
    for (let i = 0; i < MAX_ROW; i++) {
        str += "<tr>";
        for (let j = 0; j < MAX_COL; j++) {
            let content = library[i][j];
            str += `<th id="cell-${i}-${j}" onclick="clickCell(${i},${j})">${content}</th>`;
        }
        str += "</tr>"
    }
    board.innerHTML = str;
}

displayBoard();

function clickCell(x, y) {
    let cell = document.getElementById(`cell-${x}-${y}`);
    cell.style.backgroundColor = '#53d60d';
    let content = cell.innerText;
    currentStr.push(content);
    let word = currentStr.join('');
    console.log(word)
    addCellResetColor(cell.id)
    if (checkCorrectWord(word)) {
        addCorrectWord(word);
        updateScore();
        setTimeout(resetCellColor, 500);
        currentStr = [];
    } else if (currentStr.length == 6) {
        currentStr = [];
        wrongWord();
    }
}

function checkCorrectWord(str) {
    for (let word of correctWords) {
        if (str == word) {
            return true;
        }
    }
}

function addCorrectWord(word) {
    wordFound.push(word);
}

function resetCellColor() {
    for (let cell of cellResetColor) {
        document.getElementById(cell).style.backgroundColor = '#ffffff';
    }
    cellResetColor = [];
}

function addCellResetColor(cell) {
    cellResetColor.push(cell);
}

function wrongWord() {
    wordFound = [];
    updateScore();
    for (let cell of cellResetColor) {
        document.getElementById(cell).style.backgroundColor = '#ff0000';
    }
    setTimeout(resetCellColor, 300);
}

function updateScore() {
    document.getElementById('count').innerText = "Điểm: " + wordFound.length;
}
function gameOver(){

}

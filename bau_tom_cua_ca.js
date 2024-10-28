const symbols = ['bầu', 'tôm', 'cua', 'cá', 'gà', 'nai'];
const diceImages = [
    'bau.png',
    'tom.png',
    'cua.png',
    'ca.png',
    'ga.png',
    'nai.png'
];
let playerBalance = 5000;

// cập nhật số dư của người chơi
function updateBalanceDisplay() {
    document.getElementById('balance').innerText = playerBalance;
}
// xử lý logic của lượt chơi khi người dùng đặt cược và tung xúc xắc
function rollDice() {
    let dice1Element = document.getElementById('dice1');
    let dice2Element = document.getElementById('dice2');
    let dice3Element = document.getElementById('dice3');

    dice1Element.classList.add('rolling');
    dice2Element.classList.add('rolling');
    dice3Element.classList.add('rolling');

    let betAmount = document.getElementById('bet-amount').value;
    let betSymbol1 = document.getElementById('bet-symbol1').value;
    let betSymbol2 = document.getElementById('bet-symbol2').value;
    let betSymbol3 = document.getElementById('bet-symbol3').value;

    setTimeout(function() {
        let dice1 = Math.floor(Math.random() * 6);
        let dice2 = Math.floor(Math.random() * 6);
        let dice3 = Math.floor(Math.random() * 6);

        dice1Element.classList.remove('rolling');
        dice2Element.classList.remove('rolling');
        dice3Element.classList.remove('rolling');

        dice1Element.src = diceImages[dice1];
        dice2Element.src = diceImages[dice2];
        dice3Element.src = diceImages[dice3];

        let winCount = 0;
        if (symbols[dice1] === betSymbol1 || symbols[dice1] === betSymbol2 || symbols[dice1] === betSymbol3) winCount++;
        if (symbols[dice2] === betSymbol1 || symbols[dice2] === betSymbol2 || symbols[dice2] === betSymbol3) winCount++;
        if (symbols[dice3] === betSymbol1 || symbols[dice3] === betSymbol2 || symbols[dice3] === betSymbol3) winCount++;

        let resultText = '';
        if (winCount > 0) {
            let totalWin = betAmount * winCount;
            playerBalance += parseInt(totalWin);
            resultText = `Bạn đã thắng ${totalWin} VND! Số lần trúng: ${winCount}`;
        } else {
            playerBalance -= parseInt(betAmount);
            resultText = `Bạn đã thua ${betAmount} VND! Không có kết quả nào trùng với 3 lựa chọn của bạn.`;
        }
        updateBalanceDisplay();
        document.getElementById('result').innerText = resultText;

    }, 2000);
}

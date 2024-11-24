// Code Created By @Dypixx....

const gameBoard = document.getElementById("gameBoard");
const resetButton = document.getElementById("resetButton");
const winnerPopup = document.getElementById("winnerPopup");
const winnerMessage = document.getElementById("winnerMessage");
const restartGameButton = document.getElementById("restartGameButton");
const startPopup = document.getElementById("startPopup");
const startGameButton = document.getElementById("startGameButton");
const inputPlayerXName = document.getElementById("inputPlayerXName");
const inputPlayerOName = document.getElementById("inputPlayerOName");
const playerXName = document.getElementById("playerXName");
const playerOName = document.getElementById("playerOName");

let currentPlayer = "X";
let board = Array(9).fill(null);
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
function initializeGame() {
    board = Array(9).fill(null);
    currentPlayer = "X";
    gameBoard.innerHTML = "";
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("bg-gray-700", "text-white", "text-4xl", "font-bold", "flex", "justify-center", "items-center", "cursor-pointer", "h-20");
        cell.dataset.index = i;
        cell.addEventListener("click", handleCellClick);
        gameBoard.appendChild(cell);
    }
}
function handleCellClick(e) {
    const index = e.target.dataset.index;
    if (board[index] || checkWinner()) return;
    board[index] = currentPlayer;
    e.target.textContent = currentPlayer;
    if (checkWinner()) {
        winnerMessage.textContent = `${currentPlayer === "X" ? playerXName.textContent : playerOName.textContent} Wins!`;
        winnerPopup.classList.remove("hidden");
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}
function checkWinner() {
    return winningCombinations.some(combination =>
        combination.every(index => board[index] === currentPlayer)
    );
}
resetButton.addEventListener("click", () => {
    initializeGame();
});
restartGameButton.addEventListener("click", () => {
    winnerPopup.classList.add("hidden");
    initializeGame();
});
startGameButton.addEventListener("click", () => {
    playerXName.textContent = inputPlayerXName.value.trim() || "Player 1";
    playerOName.textContent = inputPlayerOName.value.trim() || "Player 2";
    startPopup.classList.add("hidden");
    initializeGame();
});

initializeGame();


// Code Created By @Dypixx....

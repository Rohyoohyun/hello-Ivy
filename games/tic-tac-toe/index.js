let currentPlayer = 'X'; // 게임 시작 시 'X'부터 시작
let board = ['', '', '', '', '', '', '', '', '']; // 보드 상태 저장
let gameActive = true; // 게임 진행 여부

// 게임 시작 시 보이기
function showGame() {
    document.getElementById('game').style.display = 'block';
    document.getElementById('instructions').style.display = 'none';
    resetGame();
}

// 게임 설명 보이기
function showInstructions() {
    document.getElementById('instructions').style.display = 'block';
    document.getElementById('game').style.display = 'none';
}

// 뒤로 가기 버튼
function goBack() {
    document.getElementById('instructions').style.display = 'none';
    document.getElementById('game').style.display = 'none';
    document.getElementById('startButton').style.display = 'inline-block';
    document.getElementById('instructionsButton').style.display = 'inline-block';
}

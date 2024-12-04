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

// 게임 보드 리셋
function resetGame() {
    board = ['', '', '', '', '', '', '', '', '']; // 보드 상태 초기화
    gameActive = true; // 게임 상태 활성화
    currentPlayer = 'X'; // 시작 플레이어 'X'

    // 모든 셀 초기화
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = '#444'; // 초기 셀 배경색
    });
}

// 플레이어가 움직일 때마다 호출되는 함수
function makeMove(cell) {
    const cellIndex = Array.from(cell.parentElement.children).indexOf(cell);

    // 이미 클릭된 셀은 무시
    if (board[cellIndex] !== '' || !gameActive) {
        return;
    }

    // 현재 플레이어의 색을 셀 배경에 적용
    board[cellIndex] = currentPlayer;
    cell.style.backgroundColor = currentPlayer === 'X' ? '#555' : '#fff598';

    // 게임 승리 확인
    if (checkWinner()) {
        document.getElementById('turn').textContent = `${currentPlayer === 'X' ? '검정' : '노랑'} 승리!`;
        gameActive = false;
    } else if (board.every(cell => cell !== '')) {
        document.getElementById('turn').textContent = '무승부!';
        gameActive = false;
    } else {
        // 턴 교대
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

// 승리 조건 확인
function checkWinner() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });
}


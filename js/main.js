/*----- constants -----*/
//Artjola Meli Changes
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

const trumpFaces = ['https://pngimg.com/uploads/donald_trump/donald_trump_PNG77.png','https://img.pngio.com/donald-trump-head-png-donald-trump-head-png-427_547.png','https://clipart.info/images/ccovers/1523212416donald-trump-head-wtf-png.png'];

const bidenFaces = ['https://politico.com/interactives/uploads/2020-elections/headshots/png/300/joe-biden.png'];

const kanyeFaces = ['https://www.pngkey.com/png/full/14-146074_share-this-article-kanye-west-head-png.png']
/*----- app's state (variables) -----*/

let board;
let gameOver = false;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        if(winner){gameOver = true}
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
        let idx = squares.findIndex(function(square) {
            return square === event.target;
        });
        if(gameOver == false){
            board[idx] = turn;
            turn = turn === 'X' ? 'O' : 'X';
            win = getWinner();
            render();
        }
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    gameOver = false
    win = null
    messages.textContent = `It's ${turn}'s turn!`
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    // squares[index].textContent = mark;
    if (mark !== "") {
        let imageURL = mark == "X" ? bidenFaces[0] : trumpFaces[0]
        squares[index].style.backgroundImage = `url(${imageURL})`
        squares[index].style.backgroundSize = "100%, 100%"
        squares[index].style.backgroundRepeat = "no-repeat"
    } else{
        squares[index].style.backgroundImage = ``
    }
    });
    // messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    messages.textContent = win === 'T' ? `It's honestly a tie, but keep clicking to change the result!` : win ? `Capitalism wins! 🇺🇸` : `It's ${turn}'s turn!`;

    };

init();

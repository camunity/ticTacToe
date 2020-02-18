/*----- constants -----*/


/*----- app's state (variables) -----*/

let board;
let turn = 'X';

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);


/*----- functions -----*/



function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    // new code below
    board[idx] = turn;
    // check your console logs to make sure it's working!
    console.log(board);
    };

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    };

init();
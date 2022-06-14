// this is good enough for tic-tac-toe, simple enough to just do the logic in javascript.
const CROSS = -1, BLANK = 0, CIRCLE = 1; 
let squares = Array(9).fill(BLANK);

function OnButtonClick(j) {
    let but = document.getElementById("square" + String(j));
    switch(squares[j]) {
        case BLANK:
            but.innerText = "X";
            squares[j] = CROSS;
            break;
        case CROSS:
            but.innerText = '';
            squares[j] = BLANK;
            break;
        case CIRCLE:
            break
        default:
            ;
    }
}

function Board(props) {
    function render_square(j) {
        return (
            <button className="square" id={"square" + String(j)} onClick={() => OnButtonClick(j)}></button>
        );
    }
    function render_row(i) {
        // hacked, make neater
        return (
            <div className="board_row">
                { render_square(i+0)}
                { render_square(i+1) }
                {render_square(i+2)}
            </div>
        );    
    };
    // hacked, make neater
    return (
        <div id="Board">
            { render_row(0) }
            { render_row(3) }
            { render_row(6) }
        </div>
    );
}

export default Board;
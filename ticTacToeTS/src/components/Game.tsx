import React, { useState } from 'react'
import Board from './Board';


const Game = () => {
    // const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    // const currentSquares = history[history.length - 1];
    const currentSquares = history[currentMove];



const handlePlay = (nextSquares:string[]) => {
    // setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);

}

const jumpTo = (nextMove:number) => {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
}

const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
        description = 'Go to move #' + move;
    } else {
        description = 'RESET';
    }
    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );
});


return (
    <>

        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>


    </>
)
}

export default Game
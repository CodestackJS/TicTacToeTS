import React, { useState } from 'react'
import Square from './Square';


interface BoardProps {
  xIsNext: boolean;
  squares: any;
  onPlay:  (nextSquares:string[]) => void
}



const Board = ({ xIsNext, squares, onPlay }:BoardProps) => {
    // const [xIsNext, setXIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    const calculateWinner = (squares:any) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }

    const handleClick = (i:number) => {
        if (squares[i] || calculateWinner(squares)){
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";

        }
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
        onPlay(nextSquares);
    }


    const winner = calculateWinner(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

  return (
    <>
    <div className="status">{status}</div>
    <div className="board-row">
    <Square value ={squares[0]} onSqareclick={() => handleClick(0)}/> 
    <Square value ={squares[1]} onSqareclick={() => handleClick(1)}/> 
    <Square value ={squares[2]} onSqareclick={() => handleClick(2)}/> 
    
    
    </div>
    <div className="board-row">
    <Square value ={squares[3]} onSqareclick={() => handleClick(3)}/> 
    <Square value ={squares[4]} onSqareclick={() => handleClick(4)}/> 
    <Square value ={squares[5]} onSqareclick={() => handleClick(5)}/> 
    </div>


    <div className="board-row">
    <Square value ={squares[6]} onSqareclick={() => handleClick(6)}/> 
    <Square value ={squares[7]} onSqareclick={() => handleClick(7)}/> 
    <Square value ={squares[8]} onSqareclick={() => handleClick(8)}/> 

    </div>

    
    </>
  )
}

export default Board
import React from 'react';
import { useEffect, useState } from 'react';
import Squares from './Squares';
import {v4 as uuid} from "uuid";


export const Board = () => {
    let initialState = ["","","","","","","","","",];

    const [square, setSquare] = useState(initialState);
    const [turn, setTurn] = useState("X");

    const handleClick = (index) => {
        if (square[index] === "" && turn==="X") {
            let string = [...square];
            string[index] = turn;
            setSquare(string);
            setTurn("O");
        }
        else if (square[index] === "") {
            let string = [...square];
            string[index] = turn;
            setSquare(string);
            setTurn("X");
        }
    };

    useEffect(() => {
        const winner = calculateWinner();
        if (winner) {
            setTimeout(() => {
                alert(`Congratulation! ${winner} has won the game`);
                setSquare(initialState);
            }, 200);
        }
    }, [square]);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i=0; i<lines.length; i++) {
            const [x, y, z] = lines[i];

            if (square[x] && square[x] === square[y] && square[x] === square[z]) {
                return square[x];
            }
        }
        return null;
    }

  return (
    <>
    <h1>Tic-Tac-Toe Game</h1>
    <div className="board">
        {square.map((t, index) => 
        <Squares key={uuid()} turn={square[index]} onClick={() => handleClick(index)} />
        )}
        
        </div>

        <div className="btn">
            <button onClick={() => setSquare(initialState)} >RESET</button>
        </div>
    </>
  )
};

export default Board;
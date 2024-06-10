import { useState } from "react";
import Square from "./Square";
import { useNavigate } from "react-router-dom";

export default function Board() {
  // Hooks
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const navigate = useNavigate();

  // Functions
  const togglePlayer = () => {
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

 
  const handleSquareClick = (index) => {
    if (squares[index] !== null || winner !== null) {
      // Ignore click if the square is already taken or if there's a winner
      return;
    }

    // Update the squares array with the current player's mark
    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    // Check for a winner
    const result = calculateWinner(newSquares);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else {
      // Toggle the player if there's no winner
      togglePlayer();
    }
  };

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

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: [a, b, c] };
      }
    }

    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[460px] h-[623px]">
        <div className="grid grid-cols-3 w-full items-center mb-[19px]">
          <img onClick={() => { navigate('/') }} title="Home" className="cursor-pointer justify-self-start" src="./xoLogo.svg" alt="Home"></img>
          <div className="justify-self-center bg-[#1F3641] shadow-[0px_-4px_0px_#10212A_inset] w-[140px] h-[52px] rounded-[10px] flex justify-center items-center gap-[13px] pb-[4px]">
            {currentPlayer === 'X' ? (<img className="w-[20px] h-[20px]" src="./xTurnIcon.svg" alt="X's turn"></img>) : (<img className="w-[20px] h-[20px]" src="./oTurnIcon.svg" alt="O's turn"></img>)}
            <p className="text-[#A8BFC9] font-outfit text-[16px] font-bold tracking-[1px]">TURN</p>
          </div>
          <div onClick={() => { navigate('/') }} className="flex justify-center flex-col items-center cursor-pointer justify-self-end bg-[#A8BFC9] shadow-[0px_-4px_0px_#6B8997_inset] w-[52px] h-[52px] rounded-[10px]">
            <img src="./redo.svg" className="w-[20px] h-[20px] "></img>
          </div>
        </div>
        <div className="grid grid-cols-3 w-fit m-auto gap-[20px]">
          {squares.map((square, index) => 
            <Square 
              onClick={() => handleSquareClick(index)} 
              key={index} 
              value={square} 
              currentPlayer={currentPlayer} 
              winner={winner}
              isWinningSquare={winningLine.includes(index)}
            />
          )}
        </div>
        {/*<div className="flex gap-[20px] mt-[19px]">
          <div className="bg-[#31C3BD] w-[140px] h-[72px] rounded-[15px]"></div>
          <div className="bg-[#A8BFC9] w-[140px] h-[72px] rounded-[15px]"></div>
          <div className="bg-[#F2B137] w-[140px] h-[72px] rounded-[15px]"></div>
        </div>*/}
        {winner && (
          <div>


            <div className="fixed  inset-0 bg-black opacity-50 w-full h-full"></div>
            <div className="fixed inset-0 flex  items-center justify-center">
            <div className=" h-[266px] w-full bg-[#1F3641] flex flex-col items-center justify-center ">
              <div className={`flex text-[40px] font-outfit font-bold  ${winner==="X"?"text-[#31C3BD]":"text-white"}`}>
                <img className="w-[64px] h-[64px]" src={winner=== "X"?"xSelectedIcon.svg":"oSelectedIcon.svg"}/> <h1>TAKES THE ROUND!</h1>
              </div>
              <div className="font-outfit flex gap-[16px]">
                <button onClick={() => { navigate('/') }} title="Home" className=" h-[52px] w-[76px] bg-[#A8BFC9] hover:bg-[#DBE8ED] text-[#1A2A33] text-[16px] rounded-[10px] font-outfit font-bold shadow-[0px_-4px_0px_#6B8997_inset]  ">QUIT</button>
                <button onClick={() => { setWinner(null) }} className=" h-[52px] w-[146px] bg-[#F2B137] hover:bg-[#FFC860] text-[#1A2A33] text-[16px] rounded-[10px] font-outfit font-bold shadow-[0px_-4px_0px_#CC8B13_inset]  ">NEXT ROUND</button>
              </div>
            </div>
            
          </div>
          </div>
          
          
        )}
      </div>
    </div>
  );
}

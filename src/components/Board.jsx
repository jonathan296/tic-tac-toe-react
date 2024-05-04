import { useState } from "react";
import Square from "./Square";
import { useNavigate } from "react-router-dom";

export default function Board() {
const [currentPlayer, setCurrentPlayer] = useState('X')
const navigate = useNavigate();

const togglePlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };




  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-[460px] h-[623px]">
        <div className="grid grid-cols-3 w-full items-center mb-[19px] ">
          <img onClick={()=>{navigate('/')}} title="Home" className="cursor-pointer justify-self-start" src="./xoLogo.svg"></img>
          <div className="justify-self-center bg-[#1F3641] shadow-[0px_-4px_0px_#10212A_inset] w-[140px] h-[52px] rounded-[10px]  flex justify-center items-center gap-[13px] pb-[4px] ">
            {currentPlayer==='X'?(<img className="w-[20px] h-[20px]" src="./xTurnIcon.svg"></img>):(<img className="w-[20px] h-[20px] " src="./oTurnIcon.svg"></img>)}<p className="text-[#A8BFC9] font-outfit text-[16px] font-bold tracking-[1px]">TURN</p>
          </div>
          <div className="justify-self-end bg-[#A8BFC9] shadow-[0px_-4px_0px_#6B8997_inset] w-[52px] h-[52px] rounded-[10px]"></div>
        </div>
        <div className="grid grid-cols-3 w-fit m-auto gap-[20px] ">
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          <Square player={currentPlayer} togglePlayer={togglePlayer} ></Square>
          
        </div>
        <div className="flex gap-[20px] mt-[19px]">
          <div className="bg-[#31C3BD] w-[140px] h-[72px] rounded-[15px]"></div>
          <div className="bg-[#A8BFC9] w-[140px] h-[72px] rounded-[15px]"></div>
          <div className="bg-[#F2B137] w-[140px] h-[72px] rounded-[15px]"></div>
        </div>
      </div>
    </div>
  );
}

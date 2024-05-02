import { useState } from "react";
import Square from "./Square";

export default function Board() {
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="w-[460px] h-[623px]">
        <div className="grid grid-cols-3 w-full items-center mb-[19px] ">
          <img className="justify-self-start" src="./xoLogo.svg"></img>
          <div className="justify-self-center bg-[#1F3641] shadow-[0px_-4px_0px_#10212A_inset] w-[140px] h-[52px] rounded-[10px]  "></div>
          <div className="justify-self-end bg-[#A8BFC9] shadow-[0px_-4px_0px_#6B8997_inset] w-[52px] h-[52px] rounded-[10px]"></div>
        </div>
        <div className="grid grid-cols-3 w-fit m-auto gap-[20px] ">
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
          <Square value={"test"}></Square>
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

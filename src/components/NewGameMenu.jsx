import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function NewGameMenu() {
  const [selectPlayer, setSelectPlayer] = useState("o");
  const navigate = useNavigate();

  const togglePlayer = (player) => {
    setSelectPlayer(player);
    console.log(player)
  };
  
  const buttonXStyle = selectPlayer === "x" ? "bg-[#A8BFC9]" : "bg-[#1A2A33] hover:bg-opacity-5 hover:bg-[#A8BFC9]";
  const buttonOStyle = selectPlayer === "o" ? "bg-[#A8BFC9]" : "bg-[#1A2A33]  hover:bg-opacity-5 hover:bg-[#A8BFC9]";
  const svgXFill = selectPlayer === "x" ? "#1A2A33" : "#A8BFC9";
  const svgOFill = selectPlayer === "o" ? "#1A2A33" : "#A8BFC9";

  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center">
        <div className=" h-[471px] w-[460px]">
          <img src="./xoLogo.svg" className="m-auto h-[32px] w-[71.97px]"></img>
          <div className="h-[205px] bg-[#1F3641] mt-[40px] rounded-[15px] shadow-[0px_-8px_0px_#10212A_inset] ">
            <h1 className="text-[16px] text-[#A8BFC9] font-outfit text-center font-bold py-[24px] tracking-[1px]">
              PICK PLAYER 1'S MARK
            </h1>
            <div className="bg-[#1A2A33] w-[412px] h-[72px] mx-auto rounded-[10px] mb-[17px] p-[9px] flex">
              <button onClick={()=>{togglePlayer("x")}} className={`${buttonXStyle} w-1/2 h-full rounded-[10px] flex flex-row items-center justify-center `}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5569 5.28973L26.7103 0.443061C26.1195 -0.147687 25.1617 -0.147687 24.571 0.443061L16 9.01404L7.42902 0.443061C6.83827 -0.147687 5.88048 -0.147687 5.28973 0.443061L0.443061 5.28973C-0.147687 5.88048 -0.147687 6.83827 0.443061 7.42902L9.01404 16L0.443061 24.571C-0.147687 25.1617 -0.147687 26.1195 0.443061 26.7103L5.28973 31.5569C5.88048 32.1477 6.83827 32.1477 7.42902 31.5569L16 22.986L24.571 31.5569C25.1617 32.1477 26.1195 32.1477 26.7103 31.5569L31.5569 26.7103C32.1477 26.1195 32.1477 25.1617 31.5569 24.571L22.986 16L31.5569 7.42902C32.1477 6.83827 32.1477 5.88048 31.5569 5.28973Z"
                    fill={`${svgXFill}`}
                  />
                </svg>
              </button>
              <button onClick={()=>{togglePlayer("o")}} className= {`${buttonOStyle} w-1/2 h-full rounded-[10px] flex flex-row items-center justify-center`}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7412 15.8706C31.7412 7.10551 24.6357 0 15.8706 0C7.10551 0 0 7.10551 0 15.8706C0 24.6357 7.10551 31.7412 15.8706 31.7412C24.6357 31.7412 31.7412 24.6357 31.7412 15.8706ZM9.4048 15.8706C9.4048 12.2996 12.2996 9.4048 15.8706 9.4048C19.4416 9.4048 22.3364 12.2996 22.3364 15.8706C22.3364 19.4416 19.4416 22.3364 15.8706 22.3364C12.2996 22.3364 9.4048 19.4416 9.4048 15.8706Z"
                    fill={`${svgOFill}`}
                  />
                </svg>
              </button>
            </div>
            <p className="text-center font-outfit text-[#A8BFC9] text-[14px] tracking-[0.8px] opacity-50">
              REMEMBER : X GOES FIRST
            </p>
          </div>
          <button onClick={()=>{navigate('/game')}} className=" h-[67px] bg-[#F2B137] hover:bg-[#FFC860] mt-[40px] rounded-[15px] font-bold shadow-[0px_-8px_0px_#CC8B13_inset] font-outfit w-full pb-2 text-[20px] text-[#1A2A33]">
            NEW GAME (VS CPU)
          </button>
          <button onClick={()=>{navigate('/game')}} className="h-[67px] bg-[#31C3BD] hover:bg-[#65E9E4] mt-[20px] rounded-[15px] font-bold shadow-[0px_-8px_0px_#118c87_inset] font-outfit w-full pb-2 text-[20px] text-[#1A2A33]">
            NEW GAME (VS PLAYER)
          </button>
        </div>
      </div>
    </>
  );
}

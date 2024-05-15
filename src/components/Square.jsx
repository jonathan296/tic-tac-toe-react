import { useState } from "react";

export default function Square({ value, onClick, winner, currentPlayer, isWinningSquare }) {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    if (value === null && winner === null) {
      onClick();
    }
  };

  const handleMouseEnter = () => {
    if (value === null && winner === null) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  let content;

  if (value === "X") {
    content = <img className="m-auto" src={`./${isWinningSquare?'xWinningIcon.svg':'xSelectedIcon.svg'}`} alt="X" />;
  } else if (value === "O") {
    content = <img className="m-auto" src={`./${isWinningSquare?'oWinningIcon.svg':'oSelectedIcon.svg'}`} alt="O" />;
  } else if (hovered) {
    content = <img className="m-auto" src={`./${currentPlayer === "X" ? "xHoverIcon" : "oHoverIcon"}.svg`} alt="Hover" />;
  } else {
    content = null;
  }

  const xbackgroundColor = isWinningSquare ? 'bg-[#31C3BD]' : 'bg-[#1F3641]';
  const xshadowColor = isWinningSquare ? '#118C87' : '#10212A';

  const obackgroundColor = isWinningSquare ? 'bg-[#F2B137]' : 'bg-[#1F3641]';
  const oshadowColor = isWinningSquare ? '#CC8B13' : '#10212A';

  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${value === "X"?xbackgroundColor:obackgroundColor} w-[140px] h-[140px] rounded-[15px] shadow-[0px_-8px_0px_${value === "X"?xshadowColor:oshadowColor}_inset]`}
    >
      {content}
    </button>
  );
}
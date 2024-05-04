import { useState } from "react"

export default function Square({player, togglePlayer}){
    const [content, setContent] = useState(null)
    const [hovered, setHovered] = useState(false)


    const handleClick = () => {
        if (content === null) { // Only set content if it's not already set
            setContent(player);
            setHovered(false)
            togglePlayer();
        }
    }

    const handleMouseEnter = () => {
        if(content === null){
            setHovered(true)
        }
        
        
    }
    const handleMouseLeave = () => {
       
        setHovered(false)
        
    }
    const displayContent = () => {
        
    }


    return(
        <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="bg-[#1F3641] w-[140px] h-[140px] rounded-[15px]  shadow-[0px_-8px_0px_#10212A_inset]" >
            
            {content === "X" ? <img className="m-auto" src="./xSelectedIcon.svg"></img>:<img></img>}
            {content === "O" ? <img className="m-auto" src="./oSelectedIcon.svg"></img>:<img></img>}
            {player === "X"&& hovered?(<img className="m-auto" src="./xHoverIcon.svg"></img>):(<img></img>)}
            {player === "O"&& hovered?(<img className="m-auto" src="./oHoverIcon.svg"></img>):(<img></img>)}
        </button>
    )
}
import { useState } from "react"

export default function Square({player, togglePlayer}){
    const [content, setContent] = useState(null)
    
    const handleClick = () => {
        if (content === null) { // Only set content if it's not already set
            setContent(player);
            togglePlayer();
        }
    }

    return(
        <button onClick={handleClick} onMouseEnter={()=>{}} onMouseLeave={()=>{}} className="bg-[#1F3641] w-[140px] h-[140px] rounded-[15px]  shadow-[0px_-8px_0px_#10212A_inset]" >
            <div className="text-2xl">
               {content}
            </div>
            
        </button>
    )
}
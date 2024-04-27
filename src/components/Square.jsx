import { useState } from "react"
export default function Square(props){
    
    return(
        <div className="bg-green-500 w-full h-[100px]" >
            <button>{props.value}</button>
        </div>
    )
}
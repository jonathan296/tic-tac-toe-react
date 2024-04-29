import { useState } from "react"
export default function Square({value}){
    
    return(
        <div className="bg-green-500 w-[200px] h-[200px]" >
            <button>{value}</button>
        </div>
    )
}
import { useState } from "react"
import Square from "./Square"


export default function Board(){
    return(
        <>
            <div className="grid grid-cols-3 w-fit m-auto gap-0 ">
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            <Square value={"test"} ></Square>
            </div>
        </>
    )
}
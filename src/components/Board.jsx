import Square from "./Square"
export default function Board(){
    return(
        <>
            <div className="grid grid-cols-3 w-fit m-auto gap-3 ">
                <div className="bg-slate-700 p-3 col-span-2">
                    <Square value={"y"} ></Square>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
                <div className="bg-slate-700 p-3">
                    <div className="bg-green-500 w-[100px] h-[100px]">x</div>
                </div>
            </div>
        </>
    )
}
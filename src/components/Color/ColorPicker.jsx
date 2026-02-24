import { useState } from "react";

export default function ColorPicker(){
    const[color,setColor]=useState("bg-gray-300");
    return(
        <div className="flex flex-col item-center justify-center min-h-screen gap-6">
        <h2 className="text-2xl font-bold">simple coclor picker</h2>
         
         {/*color box*/}
         <div className={`w-48 h-48 rounded-xl  ${color}`}></div>

         {/* button*/}
         <div className="flex gap-4">

            <button
            onClick={()=>setColor("bg-red-500")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg">red
            </button>

            <button
            onClick={()=>setColor("bg-blue-500")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg">blue
            </button>

            <button
            onClick={()=>setColor("bg-green-500")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg">green
            </button>

         </div>
    </div>
    )
         }

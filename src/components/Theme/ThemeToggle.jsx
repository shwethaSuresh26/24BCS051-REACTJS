import { useState } from "react";

function ThemeToggle(){
    const [isDark,setIsDark]=useState(false)
      

    const themeClass=isDark
    ?"bg-gray-900 text-white"
    :"bg-white text-gray-900";

    return (
    <div className={`p-4 ${themeClass} min-h-screen w-screen flex items-center justify-center`}>

        <div className="text-center bg-white p-10 rounded-2xl shadow-xl">
            <h1 className="text-2xl font-bold mb-4">
                {isDark ? "Dark Theme" : "Light Theme"}
                </h1>
                 
            <p className="mb-6 text-lg"> click the buttton to switch theme</p>

            <button
            onClick={()=>setIsDark(!isDark)}
            className="px-6 py-2 rounded-lg font-semibold bg-blue-500 text-white">
                toggle theme
            </button>

        
        </div>
    </div>

    );
}

export default ThemeToggle;
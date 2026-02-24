import { useEffect, useState } from "react";

export default function Greetings(){
    const[greeting,setGreeting]=useState("");
    const[time,setTime]=useState("");


    useEffect(()=>{
        const interval=setInterval(()=>{
            const now =new Date();
            const hour=now.getHours();
            const min =now.getMinutes().toString().padStart(2,"0");
            const sec =now.getSeconds().toString().padStart(2,"0");
             
            if(hour<12){
                setGreeting("goodmorning");
            }else if(hour>=12 && hour<17){
                setGreeting("good afternoon");
            }else if(hour>=17 && hour<20){
                setGreeting("good evening");
            }else {
                setGreeting("good night");
            }
        
            setTime(`${hour.toString().padStart(2,"0")}:${min}:${sec}`)

        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4">{greeting}</h1>
            <p className="text-2xl">{time}</p>
        </div>
    );
}

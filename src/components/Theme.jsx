import React, { useState } from "react";
export default function Theme() {
    const [currentTheme, setCurrentTheme] = useState("light")
    return (
        
        <div className={`h-screen ${currentTheme =="dark" ?"dark" :""}`}>
           {currentTheme == "dark" ? ( 
            <button 
            onClick={() => {
                setCurrentTheme("light")
            }}
            >
                light
            </button>
           ): (
           
             
            
                <button 
                onClick={() => {
                    setCurrentTheme("dark")
                }}
                >
                    dark
                </button>
               

            )}
            <p>current theme:{currentTheme}</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum accusantium! Ducimus necessitatibus cumque fugit laborum, placeat ipsam? Exercitationem sequi harum facere sunt ullam quibusdam eum expedita ducimus incidunt quisquam?
            </p>

        </div>

    )
} 
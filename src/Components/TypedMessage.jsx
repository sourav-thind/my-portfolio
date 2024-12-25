import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";


const TypedMessage = ({text}, position, rotation) => {
    const [typedText, setTypedText] = useState("");
    
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setTypedText((prev) => prev + text[index]);
            index++;
            if (index === text.length-1) {
                clearInterval(interval);
            }
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return (
        <Html position={position} rotation={rotation} >
            <div className="bg-gray-900 text-white p-3 rounded-md text-lg w-[16rem] h-[8rem] overflow-hidden"
            >
                {typedText}
            </div>
        </Html>
    );
};


export default TypedMessage
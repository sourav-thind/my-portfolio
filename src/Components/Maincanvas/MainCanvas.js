import React from "react";
import { Canvas } from "@react-three/fiber";
import MainSetup from "../MainSetup";
import CubeEnvironment from "./CuberTexture";
import { Preload } from "@react-three/drei";
import PreloadScene from "../PreloadScene";



function MainCanvas() {
  return (
 
    <Canvas dpr={[1, window.devicePixelRatio]} color="#272B35" style={{ height: '100vh',  background: "#20242D" }}  >
      <fogExp2 attach="fog" color="#262a33" near={1} far={8} density={0.1}/>  
      <MainSetup/>
      <PreloadScene/>
    </Canvas>
   
  );
}

export default MainCanvas;

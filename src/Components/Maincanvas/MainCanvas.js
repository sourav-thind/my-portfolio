import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import MainSetup from "../MainSetup";



function MainCanvas() {
  return (
 
    <Canvas style={{ height: '100vh' }} color="#475569">
      <Environment files="/env.hdr" background />
      <MainSetup/>
    </Canvas>
   
  );
}

export default MainCanvas;

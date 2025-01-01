import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import MainSetup from "../MainSetup";
import CubeEnvironment from "./CuberTexture";



function MainCanvas() {
  return (
 
    <Canvas dpr={[1, window.devicePixelRatio]} shadows style={{ height: '100vh' }} color="#475569">
      <MainSetup/>
      <CubeEnvironment/>
    </Canvas>
   
  );
}

export default MainCanvas;

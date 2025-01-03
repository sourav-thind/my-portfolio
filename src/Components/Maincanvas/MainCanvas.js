import React from "react";
import { Canvas } from "@react-three/fiber";
import MainSetup from "../MainSetup";
import CubeEnvironment from "./CuberTexture";



function MainCanvas() {
  return (
 
    <Canvas dpr={[1, window.devicePixelRatio]} shadows style={{ height: '100vh' }} color="#475569">
      {/* <MainSetup/> */}
    </Canvas>
   
  );
}

export default MainCanvas;

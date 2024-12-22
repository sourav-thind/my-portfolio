import React from "react";
import { Canvas } from "@react-three/fiber";
import MainSetup from "../MainSetup";



function MainCanvas() {
  return (
    <Canvas style={{ height: '100vh' }}>
      <MainSetup/>
    </Canvas>
  );
}

export default MainCanvas;

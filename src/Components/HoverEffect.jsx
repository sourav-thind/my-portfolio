import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

// Component to handle the typing message animation
const TypedMessage = ({ text }) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 100); // Typing speed
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div
      style={{
        background: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontFamily: "Arial, sans-serif",
        fontSize: "14px",
      }}
    >
      {typedText}
    </div>
  );
};

// Main Hover Effect Component
const HoverEffect = ({ scene }) => {
  const [hovered, setHovered] = useState(false);
  const [hoverPosition, setHoverPosition] = useState([0, 0, 0]);

  useEffect(() => {
    // Traverse the scene to find the Sketchfab_model
    scene.traverse((object) => {
      if (object.name === "Sketchfab_model") {
          object.userData = {
              onClick: () => {
              console.log("found it");
              setHovered(true);
            // const position = new THREE.Vector3();
            // object.getWorldPosition(position);
            // setHoverPosition([position.x, position.y + 1.5, position.z]); // Message appears slightly above the model
          },
          onPointerOut: () => {
            setHovered(false);
          },
        };
      }
     })
  
}, [scene]);

  return (
    <>
      {hovered && (
        <Html position={hoverPosition} center >
          <TypedMessage text="tHe likes music, He plays guitar sometimes" />
        </Html>
      )}
    </>
  );
};

export default HoverEffect;

import React, { useState, useEffect, useRef } from 'react'
import { SpotLightHelper, DirectionalLightHelper } from "three";
import { OrbitControls, useGLTF, Html, Environment } from "@react-three/drei";
import { Leva, useControls } from 'leva';
import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import gsap from "gsap";
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial, } from 'react-awesome-button';
import { RGB_PVRTC_2BPPV1_Format } from 'three';
import { directPointLight } from 'three/tsl';
import { AxesHelper } from "three";
import { IoArrowBackCircleSharp } from "react-icons/io5";


const MainSetup = () => {

    const { scene } = useGLTF("/MainSetup.glb");
    const iframeRef = useRef();
    // const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, distanceFactor, distanceFactor2, color1, color2 } = useControls({
    //     rotationX: { value: -2.2, min: -30, max: 30, step: 0.01 },
    //     rotationY: { value: 0.39, min: -30, max: 30, step: 0.01 },
    //     rotationZ: { value: 4.10, min: -30, max: 30, step: 0.01 },
    //     positionX: { value: -2.4, min: -30, max: 30, step: 0.001 },
    //     positionY: { value: 1.46, min: -30, max: 30, step: 0.001 },
    //     positionZ: { value: 3.18, min: -30, max: 30, step: 0.001 },
    //     distanceFactor: { value: 5, min: 0, max: 10, step: 1 },
    //     distanceFactor2: { value: 200, min: 0, max: 300, step: 1 },
    //     color1: { value: '#ff0000' },
    //     color2: { value: '#00FFA3' }

    // });
    const { camera } = useThree();
    const [clicked, setClicked] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [showBack2Menu, setShowBack2Menu] = useState(false);

    const initialCameraPosition = [-0.63, 2.86, 11.25];
    const initialModelRotation = [0, 0, 0];

    const newCameraPosition = [0, 1, 4];
    const newModelRotation = [0, 1.28, 0];

    const cameraRef = useRef(initialCameraPosition);
    const modelRef = useRef(initialModelRotation);


    const handleClick = () => {
        setClicked(true);
        gsap.to(camera.position, { x: 0, y: 2, z: 6, duration: 2 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 2 });
        setTimeout(() => {
            setShowButtons(true);
        }, 2000);
    };
    const handleButton1 = () => {
        setShowButtons(false);
        gsap.to(camera.position, { x: 0, y: 1.40, z: -0.04, duration: 2 });
        gsap.to(camera.rotation, { x: -0.05, y: -0.33, z: -0.02, duration: 2 });
        setTimeout(() => {
        setShowBack2Menu(true);
          }, 3000);
    };

    const handleButton2 = () => {
        setShowButtons(false);
        // Additional action for Button 2
        gsap.to(camera.position, { x: -5, y: 0.8, z: 8, duration: 2 });
        gsap.to(camera.rotation, { x: 0.2, y: -0.5, z: 0, duration: 2 });
    };

    const handleButton3 = () => {
        setShowButtons(false);

        gsap.to(camera.position, { x: -0.63, y: 2.86, z: 11.25, duration: 2 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 2.63, z: 0, duration: 2 });
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    };








    useEffect(() => {
        camera.position.set(...initialCameraPosition);
        // camera.rotation.set(rotationX,rotationY,rotationZ)
        // scene.position.set(...initialModelRotation)
    }, [camera]);
    // useEffect(() => {
    //     camera.position.set(positionX,positionY,positionZ);
    //     camera.rotation.set(rotationX,rotationY,rotationZ)
    //     // scene.position.set(...initialModelRotation)
    // }, [positionY, positionX, positionZ, rotationX,rotationY,rotationZ]);



    return (
        <>
            <ambientLight intensity={10} />
            <directionalLight
                color={'#00ffA3'}
                intensity={5}
                position={[30, 30, 0]}
                castShadow

            />
            <directionalLight color="white" intensity={2.5}
                position={[-2.2, 0.39, 4.10]}
            />
            <color args={['#475569']} attach="background" />

            <primitive ref={modelRef} object={scene} rotation={[0, 2.63, 0]} >
                {/* <axesHelper args={[5]}/> */}
                <Html
                    transform
                    occlude
                    rotation={[0, 4.69, 0]}
                    position={[0.36, 1.37, -0.03]}
                    style={{
                        width: '1024px',
                        height: '536px',

                    }}
                    distanceFactor={0.34}
                >
                    <iframe src="https://protfolio-html.vercel.app/" ref={iframeRef}
                        style={{ width: '1024px', height: '536px', border: 'none', overflow: 'hidden' }}

                    />
                </Html>
                {/* <OrbitControls /> */}
            </primitive>
            {!clicked && (
                <Html position={[0, 2, 0]} transform className="h-screen w-screen">
                    <div
                        className="flex flex-col items-center justify-center h-[30vh] w-[30vw] bg-drbgclr fixed top-1/2 right-0 mr-20 rounded-xl -translate-y-1/2
              transform transition-all duration-500 ease-in-out scale-90 hover:scale-100 
              translate-x-10 hover:translate-x-0"
                    >
                        <div className="text-white mb-4 opacity-100 animate-fade-in text-center">
                            <p>Do you really want to risk it all?</p>
                        </div>
                        <button
                            onClick={handleClick}
                            className="p-4 bg-drfgclr text-drbgclr rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600"
                        >
                            Yes
                        </button>
                    </div>
                </Html>
            )}

            {showButtons && (
                <Html position={[0, 2, 0]} transform>
                    <div className="relative w-[200px] top-[15vh] h-[90px] left-0 flex items-center justify-center">

                        <span class="absolute top-0 mt-1 ml-1 h-12 w-16 rounded-lg bg-drbgclr"></span>
                        <button
                            onClick={handleButton1}
                            className="absolute top-0 p-1 h-12 w-16 bg-drfgclr  text-xs text-drbgclr rounded-lg "

                        >
                            Portfolio
                        </button>


                        <span class="absolute top-16 left-0 mt-1 ml-1 p-1 h-12 w-16 rounded-lg bg-drbgclr"></span>
                        <button
                            onClick={handleButton2}
                            className="absolute top-16 left-0 p-1 h-12 w-16  bg-drfgclr text-xs text-drbgclr rounded-lg shadow-lg"
                        >
                            Look Around
                        </button>

                        <span class="absolute top-16 right-0 mt-1 ml-1 p-1 h-12 w-16 rounded-lg bg-drbgclr"></span>
                        <button
                            onClick={handleButton3}
                            className="absolute top-16 right-1 p-1 h-12 w-16  bg-drfgclr text-xs text-drbgclr rounded-lg shadow-lg"
                        >
                            Go Back
                        </button>
                    </div>
                </Html>

            )}

            < Html>
            {showBack2Menu && (
        <div className="absolute bottom-[80px] left-4">
          <button
            className=" text-white rounded-full  w-2 h-2"
            aria-label="Go Back"
          >
            <IoArrowBackCircleSharp size={20} />
          </button>
        </div>
      )}
            </Html>
        </>
    )
}

export default MainSetup;
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
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import HoverEffect from './HoverEffect';
import TypedMessage from './TypedMessage';
import { Typewriter } from 'react-simple-typewriter'




const MainSetup = () => {

    const { scene } = useGLTF("/MainSetup.glb");
    const iframeRef = useRef();
    const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, distanceFactor, distanceFactor2, color1, color2 } = useControls({
        rotationX: { value: 0, min: -4, max: 4, step: 0.01 },
        rotationY: { value: 1.25, min: -4, max: 4, step: 0.01 },
        rotationZ: { value: 0, min: -4, max: 4, step: 0.01 },
        positionX: { value: -8, min: -10, max: 10, step: 0.1 },
        positionY: { value: 4.7, min: -10, max: 10, step: 0.1 },
        positionZ: { value: 2.10, min: -10, max: 10, step: 0.1 },
        distanceFactor: { value: 5, min: 0, max: 10000, step: 1 },
        distanceFactor2: { value: 200, min: 0, max: 300, step: 1 },
        color1: { value: '#ff0000' },
        color2: { value: '#00FFA3' }

    });
    const { camera } = useThree();
    const [clicked, setClicked] = useState(false);
    const [showButtons, setShowButtons] = useState(false);
    const [ShowMenu1, setShowMenu1] = useState(false);
    const [ShowMenu2, setShowMenu2] = useState(false);
    const [guitarMessage, setGuitarMessage] = useState(false);
    const [menuMessage, setMenuMessage] = useState(false);


    const initialCameraPosition = [-11.23, 2, 2.13];
    const initialCameraRotation = [0, -1.46, 0];
    const initialModelRotation = [0, 0, 0];

    const newCameraPosition = [0, 1, 4];
    const newModelRotation = [0, 1.28, 0];
    const rectLightRef = useRef(null);
    const helperRef = useRef(null);
    const cameraRef = useRef(initialCameraPosition);
    const modelRef = useRef(initialModelRotation);


    const handleClick = () => {
        setClicked(true);
        gsap.to(camera.position, { x: 0, y: 2, z: 6, duration: 2 });
        gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 2 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 2 });
        setTimeout(() => {
            setMenuMessage(true);
            setShowButtons(true);
        }, 2000);
    };
    const handleBackClick = () => {
        setClicked(true);
        gsap.to(camera.position, { x: 0, y: 2, z: 6, duration: 3 });
        gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 3 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 3 });
        setShowMenu1(false)
        setShowMenu2(false)
        setGuitarMessage(false)
        setMenuMessage(false)
        setTimeout(() => {
            setShowButtons(true);
        }, 2000);
    };
    const handleButton1 = () => {
        setShowButtons(false);
        gsap.to(camera.position, { x: -0.05, y: 1.38, z: -0.04, duration: 2 });
        gsap.to(camera.rotation, { x: 0, y: -0.33, z: 0, duration: 2 });
        setMenuMessage(false);
        setTimeout(() => {
            setShowMenu1(true);
        }, 2000);
    };

    const handleButton2 = () => {
        setShowButtons(false);
        gsap.to(camera.position, { x: -2.2, y: 2.3, z: 1.6, duration: 2 });
        gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 2 });
        setMenuMessage(false);
        setTimeout(() => {
            setShowMenu2(true);
        }, 2000);
    };

    const handleButton3 = () => {
        setShowButtons(false);

        gsap.to(camera.position, { x: -11.23, y: 2, z: 2.13, duration: 2 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 2 });
        gsap.to(camera.rotation, { x: 0, y: -1.46, z: 0, duration: 2 });
        setMenuMessage(false);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };








    useEffect(() => {

        camera.position.set(...initialCameraPosition);
        camera.rotation.set(...initialCameraRotation);
        scene.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
        // if (rectLightRef.current) {
        //     helperRef.current = new RectAreaLightHelper(rectLightRef.current);
        //     rectLightRef.current.add(helperRef.current);
        // }
        // camera.rotation.set(0,2.50,0)
        // camera.position.set(...initialCameraPosition);
        // camera.rotation.set(rotationX,rotationY,rotationZ)
        // scene.position.set(...initialModelRotation)
    }, [camera]);
    // useEffect(() => {
    //     // camera.position.set(0.35,2,2.43);
    //     // camera.position.set(positionX,positionY,positionZ);
    //     // camera.rotation.set(rotationX,rotationY,rotationZ)
    //     // scene.position.set(...initialModelRotation)
    // }, [rotationX, rotationY, rotationZ]);



    return (
        <>
            {/* <ambientLight intensity={10} /> */}

            <directionalLight color="white" intensity={1.5}
                position={[-2.2, 0.39, 4.10]}
            />

            <rectAreaLight
                width={11}
                height={0.6}
                color="#00ffA3"
                intensity={100}
                position={[-0.7, 4.38, -1.2]}
                rotation={[-1.5, -0.02, -0.29]}
               
            />
            {/* <rectAreaLight
                width={4}
                height={0.6}
                color="#FF0001"
                intensity={100}
                position={[0.5, 2.3, -0.9]}
                rotation={[0, -0.28, 0]}
              
            /> */}
            <directionalLight
                color="white"
                intensity={1.5}
                position={[-3.2,3.2,0.5]}
                castShadow
                shadow-mapSize={[1024, 1024]} 
                shadow-camera-near={1.2}
                shadow-camera-far={10}
                shadow-camera-left={-5}
                shadow-camera-right={5}
                shadow-camera-top={5}
                shadow-camera-bottom={-5}
            />
            <rectAreaLight
                width={0.6}
                height={6.1}
                color="#00ffA3"
                intensity={100}
                position={[-6.7, 4.53, -0.03]}
                rotation={[-1.58, -0.05, -0.3]}
               
            />
            <color args={['#475569']} attach="background" />

            <primitive ref={modelRef} object={scene} castShadow  rotation={[0, 1.28, 0]} onClick={(event) => {
                const validNames = [
                    "Material1-material",
                    "Material2-material",
                    "Material3-material",
                    "Material4-material",
                    "Material5-material",
                ];

                if (validNames.includes(event.object.name) && ShowMenu2) {
                    setGuitarMessage(true);
                    event.stopPropagation();
                }

            }} >
                {/* <axesHelper args={[5]}/> */}
                <Html
                    ref={iframeRef}
                    transform
                    occlude
                    rotation={[2, 4.75, 2]}
                    position={[0.35, 1.367, -0.03]}
                    style={{ width: '954px', height: '522px', border: 'none', overflow: 'hidden' }}
                    distanceFactor={0.34}
                >
                    <iframe src="https://protfolio-html.vercel.app/" title='screen'
                        style={{ width: '954px', height: '522px', border: 'none', overflow: 'hidden' }} />
                    {/* <HtmlMain /> */}


                </Html>
                {/* <OrbitControls /> */}
            </primitive>
            {!clicked && (
                <Html occlude position={[-7.1, 3, -0.6]} scale={0.3} rotation={[0, -1.86, 0]} transform className="h-screen w-screen  ">
                    <div
                        className="flex flex-col items-center justify-center h-[20vh] w-[30vw] bg-drbgclr fixed bottom-0 rounded-xl 
    transform transition-all duration-500 ease-in-out scale-90 hover:scale-100 mx-auto 
    left-1/2  -translate-x-1/2"
                    >
                        <div className="text-white text-xl mb-4 opacity-100 animate-fade-in text-center">
                            <p>Do you really want to risk it all?</p>
                        </div>
                        <button
                            onClick={handleClick}
                            className="p-4 bg-drfgclr text-drbgclr text-xl font-bold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600"
                        >
                            Yes
                        </button>
                    </div>
                </Html>
            )}
            {menuMessage && (<Html position={[-1.2,3.4,2.8]} className="bg-gray-900  text-white p-3 rounded-md text-lg w-[32rem] h-[8rem] overflow-hidden bg-opacity-60"><Typewriter words={["Okay you can have a tour. I won't tell him.           You are not here to steal something right??             You can watch is portfolio, or look around. Let me know if you find his car keys!!!!!!"]} typeSpeed={40}/></Html>)}
            {/* //This will show three buttons  */}
            {showButtons && (
                <>
                    <Html position={[0, 2, 0]} transform>
                        <div className="relative w-[200px] top-[15vh] h-[90px] left-0 flex items-center justify-center">

                            <span className="absolute top-0 mt-1 ml-1 h-10 w-16 rounded-lg bg-drbgclr"></span>
                            <button onClick={handleButton1}
                                className="absolute top-0 p-1 h-10 w-16 bg-drfgclr  text-xs text-drbgclr rounded-lg ">
                                Portfolio
                            </button>

                            <span className="absolute top-12 left-0 mt-1 ml-1 p-1 h-10 w-16 rounded-lg bg-drbgclr"></span>
                            <button onClick={handleButton2}
                                className="absolute top-12 left-0 p-1 h-10 w-16  bg-drfgclr text-xs text-drbgclr rounded-lg shadow-lg">
                                Look Around
                            </button>

                            <span className="absolute top-12 right-0 mt-1 ml-1 p-1 h-10 w-16 rounded-lg bg-drbgclr"></span>
                            <button
                                onClick={handleButton3}
                                className="absolute top-12 right-1 p-1 h-10 w-16  bg-drfgclr text-xs text-drbgclr rounded-lg shadow-lg">
                                Go Back
                            </button>
                        </div>
                    </Html>
                </>
            )}
            {scene && <HoverEffect scene={scene} />}


            {ShowMenu1 && (< Html
                transform
                occlude
                rotation={[0, -0.36, 0]}
                scale={0.25}
                position={[0.22, 1.35, -0.19]} >

                <button
                    className=" text-white rounded-full  w-[2px] h-[2px]"
                    aria-label="Go Back"
                    onClick={handleBackClick}
                >
                    <IoArrowBackCircleSharp size={20} />
                </button>

            </Html>
            )}
            {ShowMenu2 && (< Html
                transform
                occlude
                scale={0.35}
                position={[-5.5, 0.9, -1.1]}
                rotation={[0, 1.25, 0]}
            >

                <button
                    className=" text-white rounded-full  w-[2px] h-[2px]"
                    aria-label="Go Back"
                    onClick={handleBackClick}
                >
                    <IoArrowBackCircleSharp size={80} />
                </button>

            </Html>
            )}
            {/* //Use --Infron of every sentence as there is an iteration error  */}
            {ShowMenu2 && guitarMessage && ( <Html position={[positionX,positionY,positionZ]} rotation={[rotationX,rotationY,rotationZ]}     className="bg-gray-900  text-white p-3 rounded-md text-lg w-[32rem] h-[8rem] overflow-hidden bg-opacity-60"><Typewriter words={["--He likes music, He plays guitar sometimes. He is not very good though! "]} typeSpeed={40}/></Html>)}
  

        </>
    )
}

export default MainSetup;
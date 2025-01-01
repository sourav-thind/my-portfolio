import React, { useState, useEffect, useRef } from 'react'
import { SpotLightHelper, DirectionalLightHelper } from "three";
import { OrbitControls, useGLTF, Html, Environment, PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from 'leva';
import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import gsap from "gsap";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import HoverEffect from './HoverEffect';
import TypedMessage from './TypedMessage';
import { Typewriter } from 'react-simple-typewriter'

import { CubeTextureLoader } from 'three';

import HtmlMain from './Html Site/HtmlMain';




const MainSetup = () => {

    const { scene } = useGLTF("/MainSetup.glb");
    const iframeRef = useRef();
    // const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, distanceFactor, distanceFactor2, color1, color2 } = useControls({
    //     rotationX: { value: 0, min: -4, max: 4, step: 0.01 },
    //     rotationY: { value: 1.37, min: -4, max: 4, step: 0.01 },
    //     rotationZ: { value: -0.05, min: -4, max: 4, step: 0.01 },
    //     positionX: { value: -8, min: -10, max: 10, step: 0.1 },
    //     positionY: { value: 3.2, min: -10, max: 10, step: 0.1 },
    //     positionZ: { value: -2, min: -10, max: 10, step: 0.1 },
    //     distanceFactor: { value: 5, min: 0, max: 10000, step: 1 },
    //     distanceFactor2: { value: 200, min: 0, max: 300, step: 1 },
    //     color1: { value: '#ff0000' },
    //     color2: { value: '#00FFA3' }

    // });
    const { camera } = useThree();
    const [clicked, setClicked] = useState(true);
    const [showButtons, setShowButtons] = useState(false);
    const [ShowMenu1, setShowMenu1] = useState(false);
    const [ShowMenu2, setShowMenu2] = useState(false);
    const [guitarMessage, setGuitarMessage] = useState(false);
    const [menuMessage, setMenuMessage] = useState(false);
    const [widthVar, setWidthVar] = useState(1);
    const [initialCameraPosition, setinitialCameraPosition] = useState([-8.9, -2.8, -1]);
    const [initialCameraRotation, setinitialCameraRotation] = useState([0, -1.85, 0]);
    const [animatedCameraPosition, setanimatedCameraPosition] = useState([-12.50, 0, 3]);
    const [animatedCameraRotation, setanimatedCameraRotation] = useState([0, -1.46, 0]);
    const [modelRotation, setmodelRotation] = useState([0, 1.28, 0]);
    const [modelPosition, setmodelPosition] = useState([0, -6, 0]);
    const [animatedModelRotation, setanimatedModelRotation] = useState([0, 1.28, 0]);
    const [scale, setscale] = useState([1, 1, 1]);
    const [htmlDiv1P, sethtmlDiv1P] = useState([[-7.3, 3, -0.35], 0.3, [0, -1.86, 0]]);
    const [menu1Btn, setMenu1Btn] = useState([[0, -4, 0], 1]);
    const [prtfBtn, setprtfBtn] = useState();
    const [clickedDiv, setclickedDiv] = useState([[-2, -3, -3]])

    const modelRef = useRef(modelRotation);
    const aspectRatio = window.innerWidth / window.innerHeight;
    var scaleVar = 3.1 / aspectRatio;

    const handleClick = () => {
        setClicked(true);
        gsap.to(camera.position, { x: 0, y: -4, z: 6, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 1.5 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 1.5 });
        setTimeout(() => {
            setMenuMessage(true);
            setShowButtons(true);
        }, 1500);
    };
    const handleBackClick = () => {
        gsap.to(camera.position, { x: 0, y: -4, z: 6, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0, y: 0, z: 0, duration: 1.5 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 1.5 });
        setShowMenu1(false)
        setShowMenu2(false)
        setGuitarMessage(false)
        setMenuMessage(false)
        setTimeout(() => {
            setShowButtons(true);
        }, 1500);
    };
    const handleButton1 = () => {
        setShowButtons(false);
        setMenuMessage(false);
        setClicked(true);
        setTimeout(() => {
            setShowMenu1(true);
        }, 1500);
        if (window.innerWidth <= 550) {

        gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });

        }
        else if (window.innerWidth <= 768) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 900) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1024) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1200) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1320) {

        }
        else if (window.innerWidth <= 1440) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1600) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1920) {

        }
        else {
        }


        gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });

    };

    const handleButton2 = () => {
        setShowButtons(false);
        gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        setMenuMessage(false);
        setTimeout(() => {
            setShowMenu2(true);
        }, 1500);
    };

    const handleButton3 = () => {
        setShowButtons(false);

        gsap.to(camera.position, { x: animatedCameraPosition[0], y: animatedCameraPosition[1], z: animatedCameraPosition[2], duration: 1.5 });
        gsap.to(modelRef.current.rotation, { x: 0, y: 1.28, z: 0, duration: 1.5 });
        gsap.to(camera.rotation, { x: 0, y: -1.46, z: 0, duration: 1.5 });
        setMenuMessage(false);
        setTimeout(() => {
            setClicked(false);
        }, 1000);
    };







    useEffect(() => {
       


        const updateWidthVar = () => {
            if (window.innerWidth <= 550) {
                setWidthVar(2.3);

                setscale([0.6, 0.9, 0.8]);

                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-10, -4, -2]);

                setanimatedCameraPosition([-6, -4, -6]);

                setanimatedModelRotation([0, 4, 0]);

                setMenu1Btn([[0, -2, 0], 0.75]);

                setclickedDiv([[-2,-3,1]]); 

            }
            else if (window.innerWidth <= 768) {
                setWidthVar(2);

            }
            else if (window.innerWidth <= 900) {
                setWidthVar(1.61);

            }
            else if (window.innerWidth <= 1024) {
                setWidthVar(1.465);

            }
            else if (window.innerWidth <= 1200) {
                setWidthVar(1.35);

            }
            else if (window.innerWidth <= 1320) {
                setWidthVar(1.24);

            }
            else if (window.innerWidth <= 1440) {
                setWidthVar(1.07);

            }
            else if (window.innerWidth <= 1600) {
                setWidthVar(1);

            }
            else if (window.innerWidth <= 1920) {
                setWidthVar(0.8);

            }
            else {
                setWidthVar(0.7);
            }

        };

        updateWidthVar();

        window.addEventListener('resize', updateWidthVar);



        // camera.position.set(...initialCameraPosition);
        // camera.rotation.set(...initialCameraRotation);
        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        const handleScreenClick = () => {
            setTimeout(() => {
                
            setClicked(false);
            }, 1500);
            gsap.to(camera.position, {
                x: animatedCameraPosition[0],
                y: animatedCameraPosition[1],
                z: animatedCameraPosition[2],
                duration: 1.5
            });
            gsap.to(camera.rotation, {
                x: animatedCameraRotation[0],
                y: animatedCameraRotation[1],
                z: animatedCameraRotation[2],
                duration: 1.5
            });
            gsap.to(modelRef.current.rotation, {
                x: animatedModelRotation[0],
                y: animatedModelRotation[1],
                z: animatedModelRotation[2],
                duration: 1.5
            })
            document.removeEventListener('mousedown', handleScreenClick);
        }


        document.addEventListener('mousedown', handleScreenClick);

    }, [camera]);






    return (
        <>
            <PerspectiveCamera
                makeDefault
                fov={75}
                position={initialCameraPosition}
                rotation={initialCameraRotation}
            />

            <directionalLight
                color="white"
                intensity={2}
                position={[-2.6, 2.7, -0.8]}

                castShadow
                shadow-mapSize={[1024, 1024]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-left={-5}
                shadow-camera-right={5}
                shadow-camera-top={5}
                shadow-camera-bottom={-5}
            /> 


            <primitive ref={modelRef} object={scene} scale={scale} castShadow position={modelPosition} rotation={modelRotation} onClick={(event) => {
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
                    scale={widthVar / scaleVar}
                    rotation={[1.95, 4.75, 1.95]}
                    position={[0.331, 1.367, -0.018]}
                    style={{ width: window.innerWidth, height: window.innerHeight, border: 'none', overflow: 'hidden' }}
                    distanceFactor={0.33}
                >
                    <HtmlMain />


                </Html>
                {/* <OrbitControls /> */}
            </primitive>
            {!clicked && (<>
              
                <Html position={clickedDiv[0]} className='sm:w-[screen]'  zIndexRange={[0, 10]}>
                    <div className="sm:w-[90vw]  xl:h-[30vh] xl:w-[40vw] xl:space-y-6 flex flex-col items-center justify-center  bg-drbgclr fixed bottom-0 rounded-xl  mx-auto hover:scale-110   ">
                    <button
                            onClick={handleClick}
                            className="sm:px-2 sm:py-1 sm:text-md sm:w-[10rem] xl:px-4 xl:py-2 xl:text-2xl bg-drfgclr text-drbgclr  font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600"
                        >
                            Go with the flow
                        </button>
                        <div className='sm:text-md lg:text-xl'>
                        <p className='text-white  font-semibold'>Skip Everything and </p>
                        <button onClick={handleButton1}
                            className="px-3 py-1 bg-drfgclr mt-2 text-drbgclr l font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600">
                            Visit Portfolio
                        </button>
                        </div>
                    </div>
                </Html>
            </>
            )}
            {menuMessage && (<Html position={[-1.2, -2.6, 2.8]} className="bg-gray-900  flex flex-row text-white p-3 rounded-md text-lg w-[32rem] h-[8rem] overflow-hidden bg-opacity-60">
                <img src="/nava.png" alt="nava the assistat" className='h-14 w-14' />
                <Typewriter words={["I am Naeva, his virtual assistant. You can have a tour. I won't tell him.     You are not here to steal something right??                    Let me know if you find his car keys!!!!!!"]} typeSpeed={30} />
            </Html>)}
            {/* //This will show three buttons  */}
            {showButtons && (
                <>
                    <Html position={menu1Btn[0]} scale={menu1Btn[1]} transform>
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
            {/* {scene && <HoverEffect scene={scene} />} */}


            {ShowMenu1 && (< Html
                transform
                occlude
                rotation={[0, -0.36, 0]}
                scale={0.15}
                position={[0.1 * aspectRatio, -4.7, -0.17]} >

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
                position={[-5.5, -5.1, -1.1]}
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
            {ShowMenu2 && guitarMessage && (
                <Html position={[-8, -1.3, 2.10]} rotation={[0, 1.25, 0]} className=" flex flex-row bg-gray-900  text-white p-3 rounded-md text-lg w-[32rem] h-[8rem] overflow-hidden bg-opacity-60">
                    <img src="/nava.png" alt="nava the assistat" className='h-14 w-14' />
                    <Typewriter words={["He likes music, He plays guitar sometimes. He is not very good though!                     Imagine I have to tell him everytime he should be a full time guitarist."]} typeSpeed={40} />
                </Html>)}


        </>
    )
}

export default MainSetup;
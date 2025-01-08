import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, Html, PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from 'leva';
import * as THREE from 'three';
import { useLoader, useThree } from '@react-three/fiber';
import gsap from "gsap";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter'
import HtmlMain from '../Html Site/HtmlMain';
import Landing from '../Landing/Landing';
import { MeshBasicMaterial } from "three"
import Stats from 'stats.js'
import StatsComponent from '../Stats';




const MainSetup = () => {

    const texture = useLoader(THREE.TextureLoader, "/textures/Shadow.png");
    const { scene } = useGLTF("/MainSetup.glb");
    const iframeRef = useRef();

    const lightRef = useRef();
    // const { rotationX, rotationY, rotationZ, positionX, positionY, positionZ, distanceFactor, distanceFactor2, color1, color2 } = useControls({
    //     rotationX: { value: 0, min: -20, max: 20, step: 0.01 },
    //     rotationY: { value: Math.PI, min: -20, max: 20, step: 0.01 },
    //     rotationZ: { value: 0, min: -20, max: 20, step: 0.01 },
    //     positionX: { value: -4.3, min: -10, max: 20, step: 0.1 },
    //     positionY: { value: -4.8 , min: -10, max: 10, step: 0.1 },
    //     positionZ: { value: -0.7, min: -10, max: 10, step: 0.1 },
    //     distanceFactor: { value: 3.08, min: 0, max: 6, step: 0.01 },
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
    const [computerMessage, setComputerMessage] = useState(false);
    const [menuMessage, setMenuMessage] = useState(false);
    const [widthVar, setWidthVar] = useState(1);
    const [initialCameraPosition, setinitialCameraPosition] = useState([-8.8, -2.8, -1.1]);
    const [initialCameraRotation, setinitialCameraRotation] = useState([0, -1.85, 0]);
    const [animatedCameraPosition, setanimatedCameraPosition] = useState([-10.50, -1, 3]);
    const [animatedCameraRotation, setanimatedCameraRotation] = useState([0, -1.46, 0]);
    const [modelRotation, setmodelRotation] = useState([0, 1.28, 0]);
    const [modelPosition, setmodelPosition] = useState([0, -6, 0]);
    const [animatedModelRotation, setanimatedModelRotation] = useState([0, 1.28, 0]);
    const [scale, setscale] = useState([1, 1, 1]);
    const [htmlDiv1P, sethtmlDiv1P] = useState([[-7.3, 3, -0.35], 0.3, [0, -1.86, 0]]);
    const [menu1Btn, setMenu1Btn] = useState([[0, -4, 0], 1]);
    const [prtfBtn, setprtfBtn] = useState();
    const [clickedDiv, setclickedDiv] = useState([[-2, -2, 0]]);

    const modelRef = useRef(modelRotation);
    const aspectRatio = window.innerWidth / window.innerHeight;
    var scaleVar = 3.1 / aspectRatio;
    const [back1Btn, setback1Btn] = useState([[0.1 * aspectRatio, -4.66, -0.17], 0.15, [0, -0.36, 0]])
    const [back2Btn, setback2Btn] = useState([[-5.8, -5.1, -1.1], 0.35, [0, 1.25, 0]])

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
        setShowMenu1(false);
        setShowMenu2(false);
        setGuitarMessage(false);
        setMenuMessage(false);
        setComputerMessage(false);
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

            gsap.to(camera.position, { x: 0, y: -4.77, z: -0.058, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });

        }
        else if (window.innerWidth <= 768) {

            gsap.to(camera.position, { x: -0.018, y: -4.775, z: 0, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 900) {

            gsap.to(camera.position, { x: -0.02, y: -4.775, z: 0, duration: 1.5 });
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
            gsap.to(camera.position, { x: -0.02, y: -4.67, z: -0.02, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1440) {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1600) {

            gsap.to(camera.position, { x: 0, y: -4.67, z: -0.061, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else if (window.innerWidth <= 1920) {
            gsap.to(camera.position, { x: 0, y: -4.67, z: -0.061, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }
        else {

            gsap.to(camera.position, { x: 0, y: -4.64, z: -0.067, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.03, y: -0.304, z: 0.008, duration: 1.5 });
        }


    };

    const handleButton2 = () => {
        setShowButtons(false);
        // gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
        // gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });


        if (window.innerWidth <= 550) {

            gsap.to(camera.position, { x: 0, y: -3.7, z: 0.5, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.02, y: 1.35, z: -0.03, duration: 1.5 });

        }
        else if (window.innerWidth <= 768) {

            gsap.to(camera.position, { x: -1.6, y: -3.7, z: 0.8, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.02, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 900) {

            gsap.to(camera.position, { x: -1.6, y: -3.7, z: 0, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0.02, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1024) {

            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1200) {

            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1320) {
            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1440) {

            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1600) {

            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else if (window.innerWidth <= 1920) {
            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }
        else {

            gsap.to(camera.position, { x: -2.2, y: -3.7, z: 1.6, duration: 1.5 });
            gsap.to(camera.rotation, { x: 0, y: 1.35, z: -0.03, duration: 1.5 });
        }


        setMenuMessage(false);
        setTimeout(() => {
            setShowMenu2(true);
        }, 1500);
    };

    const handleButton3 = () => {
        setShowButtons(false);
   
        gsap.to(modelRef.current.rotation, { x: animatedModelRotation[0], y: animatedModelRotation[1], z: animatedModelRotation[2], duration: 1.5 });
        gsap.to(camera.rotation, { x: animatedCameraRotation[0], y: animatedCameraRotation[1], z: animatedCameraRotation[2], duration: 1.5 });
        gsap.to(camera.position, { x: animatedCameraPosition[0], y: animatedCameraPosition[1], z: animatedCameraPosition[2], duration: 1.5 });

       

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

                setinitialCameraPosition([-9, -4, -3.2]);

                setmodelRotation([0, 1, 0]);

                setanimatedModelRotation([0, 1.28, 0]);

                setMenu1Btn([[0, -4, 0], 0.75]);

                setclickedDiv([[-2, -3, 1]]);

                setback1Btn([[0.05, -4.815, -0.17], 0.05, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -4.8, -0.7], 0.35, [0, 1.25, 0]]);

            }
            else if (window.innerWidth <= 768) {
                setWidthVar(2);
                setscale([0.6, 0.9, 0.8]);
                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-8, -4, -2]);

                setMenu1Btn([[0, -4, 0], 0.75]);

                setclickedDiv([[-2, -3, 1]]);

                setback1Btn([[0.09, -4.84, -0.15], 0.05, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -5, -0.7], 0.25, [0, 1.25, 0]]);


            }
            else if (window.innerWidth <= 900) {
                setWidthVar(1.61);
                setscale([0.6, 0.9, 0.8]);
                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-8, -4, -2]);


                setMenu1Btn([[0, -4.5, 0], 0.75]);

                setclickedDiv([[-2, -3, 1]]);

                setback1Btn([[0.1, -4.8, -0.12], 0.1, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -5, -0.7], 0.25, [0, 1.25, 0]]);

            }
            else if (window.innerWidth <= 1024) {
                setWidthVar(1.465);
                setscale([0.6, 0.9, 0.8]);
                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-7.4, -2.8, -1.25]);

                setMenu1Btn([[0, -4.5, 0], 0.75]);

                setclickedDiv([[-9, -2, 2]]);

                setback1Btn([[0.1, -4.8, -0.12], 0.1, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -5, -0.7], 0.25, [0, 1.25, 0]]);

            }
            else if (window.innerWidth <= 1200) {
                setWidthVar(1.45);

                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-9.2, -3, -1.25]);

                setMenu1Btn([[0, -4.5, 0], 0.75]);

                setclickedDiv([[-9, -2, 2]]);

                setback1Btn([[0.1, -4.66, -0.17], 0.1, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -4.6, -0.1], 0.25, [0, 1.25, 0]]);


            }
            else if (window.innerWidth <= 1320) {
                setWidthVar(1.24);
                sethtmlDiv1P([[-6, 4.5, 1.5], 0.4, [0, -1.4, 0]]);

                setinitialCameraPosition([-8.8, -2.8, -1.25]);

                setMenu1Btn([[0, -4.5, 0], 0.75]);

                setclickedDiv([[-9, -2, 2]]);

                setback1Btn([[0.1, -4.66, -0.17], 0.1, [0, -0.36, 0]]);

                setback2Btn([[-4.3, -4.6, -0.1], 0.25, [0, 1.25, 0]]);



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
        if (lightRef.current) {
            lightRef.current.shadow.needsUpdate = false; 
        }


        scene.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
            if (child.isMesh && child.name === "Plane") {
                child.material.map = texture;
                child.material.needsUpdate = false;
                child.rotation.set(Math.PI, 0, 0);
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
        const renderer = document.querySelector('canvas').__webgl;
        if (renderer) {
            renderer.shadowMap.autoUpdate = false;
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
            <ambientLight intensity={1} />

            <directionalLight
                ref={lightRef}
                color="white"
                intensity={1}
                position={[0, 24.2, -7.2]}
                castShadow
                shadow-mapSize={[128, 128]}
                shadow-camera-near={1}
                shadow-camera-far={10}
                shadow-camera-left={-5}
                shadow-camera-right={5}
                shadow-camera-top={5}
                shadow-camera-bottom={-5}
            />


            <primitive ref={modelRef} object={scene} scale={scale} position={modelPosition} rotation={modelRotation} onClick={(event) => {

                const validNames = [
                    "Material2-material",
                    "Material5-material",
                ];
                const computerNames = [
                    "Screen.004",
                    "Sketchfab_model003",
                    "Computer.004",
                    'Computer1_Computer001_0'
                ]

                if (validNames.includes(event.object.name) && ShowMenu2) {
                    setGuitarMessage(true);
                    setComputerMessage(false);
                    event.stopPropagation();

                }
                else if (computerNames.includes(event.object.name) && ShowMenu2) {
                    setComputerMessage(true);
                    setGuitarMessage(false);
                    event.stopPropagation();
                }

            }} >

                <Html
                    ref={iframeRef}
                    transform
                    occlude
                    scale={0.7}
                    rotation={[1.95, 4.75, 1.95]}
                    position={[0.331, 1.34, -0.018]}
                    style={{ width: window.innerWidth, height: window.innerHeight, border: 'none', overflow: 'hidden' }}
                    distanceFactor={0.33}
                >
                    <HtmlMain />


                </Html>
            </primitive>
            {!clicked && (<>

                <Html position={clickedDiv[0]} className='sm:w-[screen]' zIndexRange={[0, 10]}>
                    <div className="w-[60vw] h-[50vw]  xl:h-[30vh] xl:w-[40vw] xl:space-y-6 flex flex-col items-center justify-center   fixed bottom-0 rounded-xl  mx-auto hover:scale-110   ">
                        <button
                            onClick={handleClick}
                            className="px-2 py-1 sm:text-md sm:w-[10rem] xl:px-4 xl:py-2 xl:text-2xl bg-drfgclr text-drbgclr  font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600"
                        >
                            Explore
                        </button>
                        <div className='text-md lg:text-xl'>
                            <p className='text-white mt-4 md:font-semibold'>Skip Everything and </p>
                            <button onClick={handleButton1}
                                className="px-3 py-1 bg-drfgclr mt-2 text-drbgclr l font-semibold rounded-lg shadow-lg transition-all duration-500 transform hover:scale-105 hover:bg-blue-600">
                                Visit Portfolio
                            </button>
                        </div>
                    </div>
                </Html>
            </>
            )}
            {menuMessage && (<Html position={[-1.2, -2.6, 2.8]} className="bg-gray-900  flex flex-row text-white p-3 rounded-md text-sm md:text-lg w-[32rem] h-[8rem] overflow-hidden bg-opacity-60">
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
                rotation={back1Btn[2]}
                scale={back1Btn[1]}
                position={back1Btn[0]} >

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
                scale={back2Btn[1]}
                position={back2Btn[0]}
                rotation={back2Btn[2]}
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

            {ShowMenu2 && guitarMessage && (
                <Html position={[-8, -1.3, 2.10]} rotation={[0, 1.25, 0]} className=" flex flex-row bg-gray-900  text-white p-3 rounded-md text-sm md:text-lg w-[24rem] h-[8rem] md:w-[32rem] overflow-hidden bg-opacity-60 ml-[2rem]">
                    <img src="/nava.png" alt="nava the assistat" className='h-14 w-14' />
                    <Typewriter words={["He likes music, He plays guitar sometimes. He is not very good though!                     Imagine I have to tell him everytime he should be a full time guitarist."]} typeSpeed={40} />
                </Html>)}
            {ShowMenu2 && computerMessage && (
                <Html position={[-8, -1.3, 2.10]} rotation={[0, 1.25, 0]} className=" flex flex-row bg-gray-900  text-white p-3 rounded-md text-sm md:text-lg w-[24rem] h-[8rem] md:w-[32rem] overflow-hidden bg-opacity-60 ml-[2rem]">
                    <img src="/nava.png" alt="nava the assistat" className='h-14 w-14' />
                    <Typewriter words={["No No Please no, don't touch that, Sourav's alter ego is creating something there, he is cruel, I mean his alter ego. I hear he is creating my evil version there too. Its not ready yet"]} typeSpeed={25} />
                </Html>)}


        </>
    )
}

export default MainSetup;
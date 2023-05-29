
import React, {useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'
import * as THREE from "three"

export const FLOOR_HEIGHT=2.3;
export const NB_FLOORS=2;
export function MainSetup(props) {
  const [position, setposition] = useState([1.21, -0.12, 0.3])
  const [rotation, setrotation] = useState([-1.59, -0.02, 1.34])
  const { nodes, materials, animations } = useGLTF('./threeProjects/MainSetup.glb')

  const group = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const {  actions, names   } = useAnimations(animations, group);
  
  useEffect(()=>{
   
      actions["Cube.001Action"].reset().play().paused = true
     
  },[])
  
  useFrame(()=>{
   tl.current.seek(scroll.offset * tl.current.duration());

    actions["Cube.001Action"].time = THREE.MathUtils.lerp(actions["Cube.001Action"].time, actions["Cube.001Action"].getClip().duration * scroll.current, 0.05)
  })
  useLayoutEffect(()=>{
    tl.current = gsap.timeline();
   

    tl.current.to(
      group.current.rotation, {
        duration:2, 
        z: -Math.PI ,

      },
      0
    ), 
    tl.current.to(
      group.current.position, {
        duration:2, 
       z: +3,
        x: 0, 
       y : -16,
       

      },)
  })
  return (
    <group ref={group} {...props} dispose={null} scale={0.1} rotation={[0,0,-0.7]}>
      <group name="Scene">
        <group name="Sketchfab_model" position={[0.95, -0.2, -0.16]} rotation={[-1.62, -1.1, 0]} scale={0.02}>
          <group name="504d8e714fdb46769572ac35901c72f4fbx" position={[-3.81, 0, -0.19]} rotation={[1.57, 0.01, 0.04]}>
            <group name="RootNode">
              <group name="Desk" position={[4.18, 77.45, 43.81]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />


            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[-1.96, -0.12, -0.32]} rotation={[1.58, -1.05, -3.01]} scale={0}>
          <group name="dffaf49cc09a4c5fa627dc746aa87a01fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode001">
              <group name="aseito_logo" position={[0.45, 8.99, 368.44]} scale={6.09} />
              <group name="Circle" position={[0.45, -100.43, 148.16]} rotation={[-Math.PI / 2, 0, 0]} scale={10.16} />
              <group name="Circle001" position={[0.45, -100.43, 151.28]} rotation={[-Math.PI / 2, 0, 0]} scale={[8.57, 22.59, 8.57]} />
              <group name="Circle002" position={[1.23, -208.3, 47.51]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={-8.98} />
              <group name="Circle003" position={[102.83, -136.07, 47.51]} rotation={[-Math.PI / 2, -1.22, Math.PI / 2]} scale={-8.98} />
              <group name="Circle004" position={[69.7, -15.89, 47.51]} rotation={[Math.PI / 2, -0.7, -Math.PI / 2]} scale={-8.98} />
              <group name="Circle005" position={[-70, -16.89, 47.51]} rotation={[Math.PI / 2, 0.7, -Math.PI / 2]} scale={-8.98} />
              <group name="Circle006" position={[-101.4, -137.53, 47.51]} rotation={[-Math.PI / 2, 1.22, Math.PI / 2]} scale={-8.98} />
              <group name="Plane" position={[0.45, 16.46, 347.72]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              <group name="Plane001" position={[0.45, -71.02, 207.53]} rotation={[-Math.PI / 2, 0, 0]} scale={83.56} />
              <group name="Plane002" position={[0.45, -100.43, 148.16]} rotation={[-Math.PI / 2, 0, 0]} scale={[18.69, 10.38, 58.11]} />
              <group name="Plane003" position={[0.45, -99.64, 66]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[8.18, 8.18, 5.51]} />
              <group name="Plane004" position={[0.45, -100.43, 132.15]} rotation={[-Math.PI / 2, 0, 0]} scale={36.1} />
              <group name="Plane005" position={[-107.03, -124.38, 107.39]} rotation={[-Math.PI / 2, 0, -0.2]} scale={12.6} />
              <group name="Sun" position={[0.45, -100.43, 447.8]} scale={100}>
                <group name="Object_34" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_35" />
                </group>
              </group>
              <group name="Camera001" position={[433.5, -1182.6, 214]} rotation={[0.02, 0.01, 1.94]} scale={100}>
                <group name="Object_32" />
              </group>
            </group>
          </group>
        </group>
        <group name="Empty" position={[0.09, 0.17, 0.09]} rotation={[-1.61, 0.44, -3.13]} scale={[0.19, 0.19, 0.18]} />
        <group name="Sketchfab_model006" position={[-0.23, -0.12, 1.02]} rotation={[1.52, -0.46, -3.11]} scale={0.26}>
          <group name="dd12f1d0399348aab05d4e554860e7c0fbx006" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode006">
              <group name="Color-PewDiePie-Logo" position={[129.82, 28.43, 17.82]} rotation={[0, -1.29, Math.PI / 2]} scale={12.41} />
              <group name="Cube063" position={[111.69, 28.36, 3.76]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube064" position={[111.69, 28.36, 3.72]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube065" position={[111.69, 28.36, 3.76]} rotation={[Math.PI / 2, 0, 3.13]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube066" position={[111.74, 28.24, 3.56]} rotation={[Math.PI / 2, 0, 3.13]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube067" position={[111.69, 28.36, 3.72]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube068" position={[129.4, 28.56, 15.77]} rotation={[-Math.PI / 2, 0, 0.28]} scale={[5.96, 2.08, 5.96]} />
              <group name="Cube069" position={[111.69, 28.36, 3.72]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -44.82]} />
              <group name="Cube072" position={[111.69, 28.36, 3.72]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube073" position={[111.69, 28.36, 3.72]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube076" position={[66.21, 28.3, 5.73]} rotation={[Math.PI / 2, 0, 2.91]} scale={[-42.89, -22.9, -42.89]} />
              <group name="Cube081" position={[93.5, 28.7, 18.93]} rotation={[-1.54, 0, -0.23]} scale={[2.62, 2.24, 1.33]} />
              <group name="Cube088" position={[99.24, 9.11, 9.62]} rotation={[-Math.PI / 2, 0, -0.13]} scale={[5.45, 1.91, 4.95]} />
              <group name="Cylinder009" position={[77.5, 29.43, 5.79]} scale={[11.57, 2.5, 11.57]} />
              <group name="Cylinder010" position={[77.5, 28.81, 5.79]} scale={[11.89, 0.39, 11.89]} />
              <group name="Cylinder012" position={[77.5, 29.66, 5.79]} scale={[10.44, 2.87, 10.44]} />
              <group name="Plane006" position={[117.46, 30.12, -3.13]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.43, 119.91, 154.11]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model004" position={[-0.17, 0.58, 1.01]} rotation={[1.62, 1.13, 2.97]} scale={0.26}>
          <group name="dd12f1d0399348aab05d4e554860e7c0fbx004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode004">
              <group name="Plane007" position={[123.14, 17.21, 0.37]} rotation={[-1.5, -0.02, 0.08]} scale={[124.43, 119.91, 154.11]} />
            </group>
          </group>
        </group>
        <group name="Empty001" position={[0.3, 0.3, 1.31]} rotation={[2.08, 1.06, -0.5]} scale={0.05} />
        <group name="Cube001" position={[0.2, 0.36, 1.01]} rotation={[2.05, 1.04, 2.67]} scale={[0.11, 0.11, 0.05]}>
          <mesh name="Cube001_1" geometry={nodes.Cube001_1.geometry} material={materials['case']} />
          <mesh name="Cube001_2" geometry={nodes.Cube001_2.geometry} material={materials.display} />
          <mesh name="Cube001_3" geometry={nodes.Cube001_3.geometry} material={materials.bezel} />
          <mesh name="Cube001_4" geometry={nodes.Cube001_4.geometry} material={materials.touchpad} />
          <mesh name="Cube001_5" geometry={nodes.Cube001_5.geometry} material={materials.ports} />
          <mesh name="Cube001_6" geometry={nodes.Cube001_6.geometry} material={materials.holes} />
          <mesh name="Cube001_7" geometry={nodes.Cube001_7.geometry} material={materials.ethernet_port} />
          <mesh name="Cube001_8" geometry={nodes.Cube001_8.geometry} material={materials.keyboard} />
          <mesh name="Cube001_9" geometry={nodes.Cube001_9.geometry} material={materials['Material.074_21.002']} />
          <mesh name="Cube001_10" geometry={nodes.Cube001_10.geometry} material={materials['Material.012']} />
          <mesh name="Cube001_11" geometry={nodes.Cube001_11.geometry} material={materials['Material.013']} />
          <mesh name="Cube001_12" geometry={nodes.Cube001_12.geometry} material={materials['Material.014']} />
          <mesh name="Cube001_13" geometry={nodes.Cube001_13.geometry} material={materials['Material.015']} />
          <mesh name="Cube001_14" geometry={nodes.Cube001_14.geometry} material={materials['Material.016']} />
          <mesh name="Cube001_15" geometry={nodes.Cube001_15.geometry} material={materials['Material.074_25.003']} />
          <mesh name="Cube001_16" geometry={nodes.Cube001_16.geometry} material={materials['Material.074_6.001']} />
          <mesh name="Cube001_17" geometry={nodes.Cube001_17.geometry} material={materials['Material.017']} />
          <mesh name="Cube001_18" geometry={nodes.Cube001_18.geometry} material={materials['Material.018']} />
          <mesh name="Cube001_19" geometry={nodes.Cube001_19.geometry} material={materials['Material.019']} />
          <mesh name="Cube001_20" geometry={nodes.Cube001_20.geometry} material={materials['Material.074_27.002']} />
          <mesh name="Cube001_21" geometry={nodes.Cube001_21.geometry} material={materials.black_plastic} />
          <mesh name="Cube001_22" geometry={nodes.Cube001_22.geometry} material={materials.card_board} />
          <mesh name="Cube001_23" geometry={nodes.Cube001_23.geometry} material={materials.white_body} />
          <mesh name="Cube001_24" geometry={nodes.Cube001_24.geometry} material={materials['Material.002']} />
          <mesh name="Cube001_25" geometry={nodes.Cube001_25.geometry} material={materials.Material} />
          <mesh name="Cube001_26" geometry={nodes.Cube001_26.geometry} material={materials['Material.001']} />
          <mesh name="Cube001_27" geometry={nodes.Cube001_27.geometry} material={materials['Material.003']} />
          <mesh name="Cube001_28" geometry={nodes.Cube001_28.geometry} material={materials['Material.004']} />
          <mesh name="Cube001_29" geometry={nodes.Cube001_29.geometry} material={materials['Material.005']} />
          <mesh name="Cube001_30" geometry={nodes.Cube001_30.geometry} material={materials.aseito_logo} />
          <mesh name="Cube001_31" geometry={nodes.Cube001_31.geometry} material={materials['screen.003']} />
          <mesh name="Cube001_32" geometry={nodes.Cube001_32.geometry} material={materials['screen outline.003']} />
          <mesh name="Cube001_33" geometry={nodes.Cube001_33.geometry} material={materials['side.003']} />
          <mesh name="Cube001_34" geometry={nodes.Cube001_34.geometry} material={materials['side control.003']} />
          <mesh name="Cube001_35" geometry={nodes.Cube001_35.geometry} material={nodes.Cube001_35.material} />
          <mesh name="Cube001_36" geometry={nodes.Cube001_36.geometry} material={materials['front camera outline.003']} />
          <mesh name="Cube001_37" geometry={nodes.Cube001_37.geometry} material={materials['front camera lens.003']} />
          <mesh name="Cube001_38" geometry={nodes.Cube001_38.geometry} material={materials['speakers.003']} />
          <mesh name="Cube001_39" geometry={nodes.Cube001_39.geometry} material={materials['charger.004']} />
          <mesh name="Cube001_40" geometry={nodes.Cube001_40.geometry} material={materials['back camera outline.003']} />
          <mesh name="Cube001_41" geometry={nodes.Cube001_41.geometry} material={materials['back camera.003']} />
          <mesh name="Cube001_42" geometry={nodes.Cube001_42.geometry} material={materials['back camera lens.003']} />
          <mesh name="Cube001_43" geometry={nodes.Cube001_43.geometry} material={materials['LED.003']} />
          <mesh name="Cube001_44" geometry={nodes.Cube001_44.geometry} material={materials['LED flash.003']} />
          <mesh name="Cube001_45" geometry={nodes.Cube001_45.geometry} material={materials['lidar.003']} />
          <mesh name="Cube001_46" geometry={nodes.Cube001_46.geometry} material={materials['pen room.003']} />
          <mesh name="Cube001_47" geometry={nodes.Cube001_47.geometry} material={materials['headphones.003']} />
        </group>
      </group>
    </group>
  )
}

export default MainSetup
useGLTF.preload('./threeProjects/MainSetup.glb')

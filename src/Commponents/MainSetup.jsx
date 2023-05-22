
import React, {useState, useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations, useScroll } from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import gsap from 'gsap'
import * as THREE from "three"

export const FLOOR_HEIGHT=2.3;
export const NB_FLOORS=2;
const MainSetup=(props) =>{
  const [position, setposition] = useState([1.21, -0.12, 0.3])
  const [rotation, setrotation] = useState([-1.59, -0.02, 1.34])
  const { nodes, materials, animations } = useGLTF('./threeProjects/MainSetup.glb')

  const group = useRef();
  const tl = useRef();
  const scroll = useScroll();
  const {  actions, names   } = useAnimations(animations, group);
  //console.log(names)
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
        // z: +6,
        // x: +7, 
        // y : +9,
        y: -Math.PI * 0.75,

      },
      0
    ), 
    tl.current.to(
      group.current.position, {
        duration:2, 
       z: +13.8,
        x: +13.5, 
       y : +4.5,
       

      },)
  })

  useEffect
  return (
    <group ref={group} {...props} dispose={null} scale={0.02}>
      <group name="Scene">
        <group name="Sketchfab_model" position={position} rotation={rotation} scale={0.02}>
          <group name="504d8e714fdb46769572ac35901c72f4fbx" position={[-3.81, -0.19, 0]} rotation={[1.57, 0.04, -0.01]}>
            <group name="RootNode">
              <group name="Desk" position={[4.18, 43.81, -77.45]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[-1.62, -0.28, 1.17]} rotation={[-1.63, -0.02, 2.65]} scale={0}>
          <group name="dffaf49cc09a4c5fa627dc746aa87a01fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode001">
              <group name="aseito_logo" position={[0.45, 368.44, -8.99]} scale={6.09} />
              <group name="Camera001" position={[433.5, 214, 1182.6]} rotation={[Math.PI, 1.2, -3.12]} scale={100}>
                <group name="Object_32" />
              </group>
              <group name="Circle" position={[0.45, 148.16, 100.43]} rotation={[-Math.PI / 2, 0, 0]} scale={10.16} />
              <group name="Circle001" position={[0.45, 151.28, 100.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[8.57, 8.57, 22.59]} />
              <group name="Circle002" position={[1.23, 47.51, 208.3]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={-8.98} />
              <group name="Circle003" position={[102.83, 47.51, 136.07]} rotation={[Math.PI, Math.PI / 9, Math.PI / 2]} scale={-8.98} />
              <group name="Circle004" position={[69.7, 47.51, 15.89]} rotation={[Math.PI, -0.87, Math.PI / 2]} scale={-8.98} />
              <group name="Circle005" position={[-70, 47.51, 16.89]} rotation={[0, -0.87, -Math.PI / 2]} scale={-8.98} />
              <group name="Circle006" position={[-101.4, 47.51, 137.53]} rotation={[0, Math.PI / 9, -Math.PI / 2]} scale={-8.98} />
              <group name="Plane" position={[0.45, 347.72, -16.46]} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              <group name="Plane001" position={[0.45, 207.53, 71.02]} rotation={[-Math.PI / 2, 0, 0]} scale={83.56} />
              <group name="Plane002" position={[0.45, 148.16, 100.43]} rotation={[-Math.PI / 2, 0, 0]} scale={[18.69, 58.11, 10.38]} />
              <group name="Plane003" position={[0.45, 66, 99.64]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[8.18, 5.51, 8.18]} />
              <group name="Plane004" position={[0.45, 132.15, 100.43]} rotation={[-Math.PI / 2, 0, 0]} scale={36.1} />
              <group name="Plane005" position={[-107.03, 107.39, 124.38]} rotation={[-Math.PI / 2, -0.2, 0]} scale={12.6} />
              <group name="Sun" position={[0.45, 447.8, 100.43]} scale={100}>
                <group name="Object_34" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="Object_35" />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group name="Empty" position={[0.28, 0.13, 0.14]} rotation={[1.57, 0, -2.94]} scale={[0.19, 0.18, 0.19]} />
        <group name="Sketchfab_model006" position={[0.04, 1.05, 0.53]} rotation={[-1.59, -0.05, 2.92]} scale={0.26}>
          <group name="dd12f1d0399348aab05d4e554860e7c0fbx006" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode006">
              <group name="Color-PewDiePie-Logo" position={[129.82, 17.82, -28.43]} rotation={[-Math.PI / 2, 0.28, Math.PI / 2]} scale={12.41} />
              <group name="Cube063" position={[111.69, 3.76, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube064" position={[111.69, 3.72, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube065" position={[111.69, 3.76, -28.36]} rotation={[-Math.PI / 2, 0.01, Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube066" position={[111.74, 3.56, -28.24]} rotation={[-Math.PI / 2, 0.01, Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube067" position={[111.69, 3.72, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube068" position={[129.4, 15.77, -28.56]} rotation={[-Math.PI / 2, 0.28, 0]} scale={[5.96, 5.96, 2.08]} />
              <group name="Cube069" position={[111.69, 3.72, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -44.82, -22.9]} />
              <group name="Cube072" position={[111.69, 3.72, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube073" position={[111.69, 3.72, -28.36]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube076" position={[66.21, 5.73, -28.3]} rotation={[-Math.PI / 2, 0.23, -Math.PI]} scale={[-42.89, -42.89, -22.9]} />
              <group name="Cube081" position={[93.5, 18.93, -28.7]} rotation={[-1.54, -0.23, 0]} scale={[2.62, 1.33, 2.24]} />
              <group name="Cube088" position={[99.24, 9.62, -9.11]} rotation={[-Math.PI / 2, -0.13, 0]} scale={[5.45, 4.95, 1.91]} />
              <group name="Cylinder009" position={[77.5, 5.79, -29.43]} scale={[11.57, 11.57, 2.5]} />
              <group name="Cylinder010" position={[77.5, 5.79, -28.81]} scale={[11.89, 11.89, 0.39]} />
              <group name="Cylinder012" position={[77.5, 5.79, -29.66]} scale={[10.44, 10.44, 2.87]} />
              <group name="Plane006" position={[117.46, -3.13, -30.12]} rotation={[-Math.PI / 2, 0, 0]} scale={[124.43, 154.11, 119.91]} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model004" position={[-0.06, 1.06, -0.16]} rotation={[-1.66, 0.04, -1.77]} scale={0.26}>
          <group name="dd12f1d0399348aab05d4e554860e7c0fbx004" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode004">
              <group name="Plane007" position={[123.14, 0.37, -17.21]} rotation={[-1.5, 0.08, 0.02]} scale={[124.43, 154.11, 119.91]} />
            </group>
          </group>
        </group>
        <group name="Empty001" position={[0.46, 1.36, 0.01]} rotation={[1.61, -0.24, -1.36]} scale={0.05} />
        <group name="Cube001" position={[0.35, 1.06, -0.03]} rotation={[-1.53, 0.24, -1.81]} scale={[0.11, 0.05, 0.11]}>
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

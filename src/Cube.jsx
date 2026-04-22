import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

export default function Cube() {
    const ref = useRef();
      const model = useGLTF("./cube.glb")

useThree(({ camera, scene, gl }) => {
    camera.position.z = 170
    gl.toneMapping = THREE.ReinhardToneMapping
    gl.outputColorSpace = THREE.SRGBColorSpace
  })
   useFrame(() => {
    if (ref.current) {
        ref.current.rotation.y += 0.008; // smooth rotate
        ref.current.rotation.x += 0.008; // smooth rotate
        ref.current.rotation.z += 0.008; // smooth rotate
    }
  });


  return (
        <>
         <primitive  ref={ref}  object={model.scene} position={[-0.1, -0.8, 0]} rotation={[0,0,0]} />
         <directionalLight position={[0, 5, 5]} color={0xffffff} intensity={10} />
   
       </>

  );
}
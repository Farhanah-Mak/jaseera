"use client";

import "./ThreeDStyles.css"
import { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Preload,
  useGLTF,
} from "@react-three/drei";
import { TextureLoader } from "three";
 

function ThreeDImage() {
  const src = "/3DModel/scene.gltf"
  const mesh = useRef(null);
  const { scene } = useGLTF(src)
  const texture =  useLoader(TextureLoader, '/hero_image.png')

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
    mesh.current.rotation.x += 0.01;
  })

  return (
    <mesh ref={mesh} scale={[1, 1, 1]}>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intesnity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={2.9}
        // position={[0, -3.25, -1.5]}
        // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ThreeD = () => {
  return (
    <Canvas
      className="canvas"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <hemisphereLight intesnity={0.15} groundColor="red"/>
      <ambientLight groundColor="green" />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <ThreeDImage />
      </Suspense>
      <Preload all />
      <Environment preset="sunset" />
    </Canvas>
  );
}

export default ThreeD
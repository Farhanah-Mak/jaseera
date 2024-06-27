
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
} from "@react-three/drei";
 

function ThreeDPlanet () {
  const src = "./planet/scene.gltf"
  const { scene } = useGLTF(src)

  return (
      <primitive
        object={scene}
          scale={2.5}
          position-y={0}
          rotation-y={0}
      />
  );
}


const PlanetCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <ambientLight colour='green'/>
      <Suspense fallback={null}>
        <OrbitControls
          enableZoom={true}
          autoRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ThreeDPlanet />
      </Suspense>
      <Preload all />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default PlanetCanvas
// components/3DVideo.js

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useVideoTexture, OrbitControls } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

const VideoPlane = ({ url, width, height }) => {
  const video = useRef();

  // Create a video texture
  const videoTexture = useVideoTexture(url);

  // Rotate the video plane for demonstration
  useFrame(() => {
    video.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={video}>
      <planeGeometry args={[width, height]} />
          <meshBasicMaterial map={videoTexture} />
    </mesh>
  );
};

const Video3D = ({ videoUrl, width, height}) => {
  return (
    <Canvas camera={{position: [0,0,10], near: 0.1, far: 1000}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
          <VideoPlane url={videoUrl} width={width} height={height} />
    </Canvas>
  );
};

export default Video3D;

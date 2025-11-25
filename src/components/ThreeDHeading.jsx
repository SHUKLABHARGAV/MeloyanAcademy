// ThreeDText.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const ThreeDHeading = () => {
  return (
    <Canvas
      style={{ width: "100%", height: "160px" }}
      camera={{ position: [0, 0, 20], fov: 40 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={2}
        height={0.5}
        bevelEnabled
        bevelThickness={0.2}
        bevelSize={0.1}
        bevelSegments={3}
        curveSegments={12}
      >
        Math ➜ Discovery ➜ Success
        <meshStandardMaterial color="#912b3a" />
      </Text3D>
    </Canvas>
  );
};

export default ThreeDHeading;

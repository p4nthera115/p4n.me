"use client";

import { Edges, OrbitControls } from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <OrbitControls />
      <mesh>
        <Edges color="#6500c9" />
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial opacity={0.0} transparent />
      </mesh>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial transparent opacity={0.5} alphaHash />
      </mesh>

      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
    </>
  );
}
